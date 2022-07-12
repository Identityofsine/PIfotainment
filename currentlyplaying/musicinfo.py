from ast import Expression


class CurrentlyPlaying():
    def __init__(self, songname, songduration, image, albumname, artist, status, update : Expression):
        self.songname = songname
        self.songduration = songduration
        self.image = image
        self.album = albumname
        self.artist = artist
        self.status = status
        self.update = update

    def updateSelf(self):
        self = self.update()
    
