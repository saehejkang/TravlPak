import express from 'express';
import * as admin from 'firebase-admin';
import request from 'supertest';
import { exposeMockFirebaseAdminApp } from 'ts-mock-firebase';

const server = express();
server.use('/Users', users);

const firebaseApp = admin.initializeApp({});
const mocked = exposeMockFirebaseAdminApp(firebaseApp);

describe('Api Endpoint: scores', () => {
    afterEach(() => {
      mocked.firestore().mocker.reset();
    });

    describe('GET', () => {
        it('user information', async () => {
          // ARRANGE
          mocked.firestore().mocker.loadCollection('Users', {
            userOne: {
              Email: 'hannah01may@gmail.com',
              FirstName: "Hannah",
              LastName: "May"
            },
            userTwo: {
                Email: 'theo.e.fritz@gmail.com',
                FirstName: "Theo",
                LastName: "Fritz"
            }
          });
        });
        const response = request(server).get('/Users');
        expect(response.body.FirstName).toEqual('Hannah');
        expect(response.body.FirstName).toEqual('Theo');
    });
});
