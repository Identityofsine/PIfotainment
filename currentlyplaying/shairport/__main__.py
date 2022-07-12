from ast import Expression
from concurrent.futures import thread
from logging.config import listen
import threading
from time import sleep
from currentlyplaying.shairport.decoder import Processor
import os
import random
import string


class ShairPortListener():
    def __init__(self, callback : Expression):
        self.processor = Processor(callback)
        self.listeningThread = None

    def setCallBack(self,callback : Expression):
        self.processor.callback = callback

    def startListening(self):
        print("ssssh... I am listening")
        self.listeningThread = threading.Thread(name='shairlistener', target=self.processor.parse)
        self.listeningThread.start()
        
    def returnImageBinary(self):
        if self.listeningThread is not None and self.processor.info is not None:
            return self.processor.info.songcoverart.binary
        
    def writetempfile(self):
        #returns the randomly generated photo
        imagebinary = self.returnImageBinary()
        S=6
        ran = self.processor.info.coverartpng if self.processor.info.coverartpng is not None else "temp"
        print(ran)
        return ran

    def returnInfo(self):
        if self.listeningThread is not None and self.processor.info is not None:
            return self.processor.info





