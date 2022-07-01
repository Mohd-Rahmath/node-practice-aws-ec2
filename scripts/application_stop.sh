#!/bin/bash


!#/usr/bin/bash -xev
sudo apt-get update
sudo apt-get install wget
cd /home/ubuntu
wget https://aws-codedeploy-us-east-1.s3.us-east-1.amazonaws.com/latest/install
sudo chmod +x ./install
sudo ./install auto



#Stopping existing node servers
echo "Stopping any existing node servers"
pkill node