import pymongo
from authInfo import CONNECTION

def connectToDBAllCols():
    connection = CONNECTION
    client = pymongo.MongoClient(connection)
    db = client.GoldTeeGroup
    pars_handicaps = db.pars_handicaps
    custom_handicaps = db.custom_handicaps
    scores = db.Scores

    return scores, custom_handicaps, pars_handicaps

def connectToDBScores():
    connection = CONNECTION
    client = pymongo.MongoClient(connection)
    db = client.GoldTeeGroup
    scores = db.Scores

    return scores