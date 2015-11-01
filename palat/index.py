#!/usr/bin/python
#-*- coding: utf8 -*-

import cgi
import cgitb; cgitb.enable()
import os

#Check that the parameters are safe to read
def isSafe( fileName ):
   #cgi path # sisennä: 3 välilyöntiä
   exeFolder, scriptName = os.path.split(os.path.abspath(__file__))
   if "../" in html_page:
      print "Error: You cannot put ../ to the file path." # sisennä: 6 välilyöntiä
      return False
   if len( fileName ) > 40:
      print "Error: Too long file name."
      return False
   if scriptName in fileName:
      print "Error: Cannot have script name in this parameter."
      return False
   return True

print("Content-type: text/html")
print("")

form = cgi.FieldStorage()
try:
   html_page = form['html_page'].value # sisennä: 3 välilyöntiä
except:
   html_page = 'etusivu.html' # sisennä: 3 välilyöntiä

if isSafe( html_page ):
   print(open('header.html','rt').read()) # sisennä: 3 välilyöntiä
   print(open(html_page,'rt').read())
   print(open('footer.html','rt').read())