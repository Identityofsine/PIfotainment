#main screen, let this be the place where the main widigt takes place
from cgitb import reset
from concurrent.futures import thread
from re import X
from time import sleep
from warnings import resetwarnings
from kivy.app import App
from kivy.uix.widget import Widget
from kivy.uix.anchorlayout import AnchorLayout
from kivy.uix.gridlayout import GridLayout
from kivy.uix.floatlayout import FloatLayout
from kivy.properties import ObjectProperty, StringProperty
from kivy.animation import Animation
from kivy.core.text import LabelBase
from kivy.config import Config
#from currentlyplaying.shairport.__main__ import ShairPortListener
import threading




class PlayerWidget(FloatLayout):
    song = ObjectProperty("None")
    album = ObjectProperty("None")
    artist = ObjectProperty("None")
    image = ObjectProperty("None")
    scroller = ObjectProperty("None")
    scrollero = ObjectProperty("None")
    scrollert = ObjectProperty("None")
    img_src = StringProperty('./gui/ARushofBloodtotheHead.jpeg')
    isPlaying = True
    def __init__(self, **kwargs):
        super().__init__(**kwargs)
        '''
        self.listener = ShairPortListener(lambda img, album, song, artist: self.update(img, album, song, artist))
        c = threading.Thread(name='background', target=self.listener.startListening)
        c.start()
        ^ RASPI CODE
        '''
        #self.update("temp")
    def changetext(self):
        #print(self.listener.returnInfo().coverartpng)
        #self.image.source = f"/tmp/coverart/{str(self.listener.returnInfo().coverartpng)}.png"
        #self.album.text = str(self.listener.returnInfo().songalbum)
        #self.song.text = str(self.listener.returnInfo().itemname)
        #self.artist.text = str(self.listener.returnInfo().songartist)
        '''
        ^ RASPI CODE
        '''
        #self.reloadimage()
        self.image.source = "gui/ARushofBloodtotheHead.png"
        self.album.text = f"Seventeen Seconds (Deluxe Edition)"
        self.song.text = "At Night - 2006 Remaster"
        self.artist.text = "The Cure "
        #self.update()
        #self.startanimation()
        #x = threading.Thread(target = self.update)
        #x.start()

    def startanimation(self):
        marquee = Animation(scroll_x=1, duration=5  )
        marquee.repeat=True
        marquee.start(self.scroller)
        marquee.start(self.scrollero)
        marquee.start(self.scrollert)    
        self.scrollers = [self.scroller, self.scrollero, self.scrollert]
        print(self.scroller.scroll_x)
    
    def update(self, img="", album="", song="", artist=""):
        print(f"img : /tmp/coverart/{img}.png, album:{album}, song:{song}, artist:{artist}")
        self.album.text = str(album)
        self.song.text = str(song)
        self.artist.text = str(artist)
        self.image.source = f"/tmp/coverart/{str(img)}.png"
        self.image.reload()
    def reloadimage(self):
        print("reloaded...")
        #print(self.listener.returnInfo().coverartpng)
        self.image.reload()

                    

class TestWidget(AnchorLayout):
    pass    

class AnchorBack(GridLayout):
    pass


class PIfotainmentApp(App):
    def build(self):
        LabelBase.register(name='Virgil', fn_regular='./gui/fonts/Virgil.ttf')
        return TestWidget()




def main():
    #ShairPortListener().startListening()

    Config.set('graphics', 'fullscreen', '0')
    Config.write()
    z = threading.Thread(name='foreground', target=PIfotainmentApp().run)
    
    z.run()
    
    
if __name__ == "__main__":
    main()



