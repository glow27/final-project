import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import session from 'express-session';
import passport from 'passport';
import {default as connectMongo} from 'connect-mongo';
import casinoPassport from './passport.js';


const middleWare = (app) => {
  app.use(cors());
  dotenv.config();
  casinoPassport(passport);

  const MongoStore = connectMongo(session);
  
  mongoose.connect('mongodb://localhost/Finale', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  
  app.use(morgan('dev'));
  // app.use(express.urlencoded({ extended: true }));
  app.use(express.json());
  app.use(cookieParser(process.env.SESSION_KEY));
  // app.use(express.static('???'))

  const cookieExpirationDate = new Date();

cookieExpirationDate.setDate(cookieExpirationDate.getDate() + 1);
  
  app.use(
    session({
      store: new MongoStore({ mongooseConnection: mongoose.connection, secret: 'squirrel', ttl: 60 }),
      secret: process.env.SESSION_KEY,
      resave: true,
      saveUninitialized: false,
      name: 'user_sid',
      cookie: { secure: false,
        
        expires: cookieExpirationDate }
    })
  );
  
  app.use(passport.initialize());
  app.use(passport.session());
  

};

export default middleWare;
