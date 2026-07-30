from werkzeug.security import generate_password_hash, check_password_hash
from sqlalchemy.ext.hybrid import hybrid_property



class User(db.Model):
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key = True)
    username = db.Column(db.String, nullable = False)
    _password_hash = db.Column(db.String, nullable = False)

#leaves all of the sqlalchemy characteristics of the column in place
    @hybrid_property
    def password_hash(self):
        return self._password_hash

#setter method for password property
    @hybrid_property
    def password_hash(self, password):
        self._password_hash = self.simple_hash(password)

#authentication method using user and password
    def authenticate(self, password):
        return self.simple_hash(password) == self._password_hash

    @staticmethod
    def simple_hash(input):
        return sum(bytearray(input, encoding='utf-8'))


    def set_password(self, password):
        self._password_hash = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.password_hash, password)


    JournalEntries = db.Relationship ('JournalEntry' back_populate = 'user')


class JournalEntry(db.Model):
    __tablename__ = 'JournalEntries'

    id = db.Column(db.Integer, primary_key = True)
    title = db.Column(db.String(100), unique = True, nullable = False)
    content = db.Column(db.String, nullable = False)
    created_at = db.Column(db.DateTime, nullable = False)

    user_id = db.Column(db.Integer, db.ForeignKey("user.id"), nullable = False)
    user = db.relationship('User', back_populates = "JournalEntries")


    