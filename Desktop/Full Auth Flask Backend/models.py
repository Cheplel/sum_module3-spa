from turtle import title


class User(db.Model):
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key = True)
    username = db.Column(db.String, nullable = False)
    _password_hash = db.Column(db.String, nullable = False)

    JournalEntries = db.Relationship ('JournalEntry' back_populate = 'user')


class JournalEntry(db.Model):
    __tablename__ = 'JournalEntries'

    id = db.Column(db.Integer, primary_key = True)
    title = db.Column(db.String(100), unique = True, nullable = False)
    content = db.Column(db.String, nullable = False)
    created_at = db.Column(db.DateTime, nullable = False)

    user_id = db.Column(db.Integer, db.ForeignKey("user.id"), nullable = False)
    user = db.relationship('User', back_populates = "JournalEntries")


    