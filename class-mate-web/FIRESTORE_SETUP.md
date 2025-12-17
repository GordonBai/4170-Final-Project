# Firestore Security Rules Setup Guide

## Problem
If you're seeing `net::ERR_CONNECTION_CLOSED` or permission errors, your Firestore security rules are likely blocking writes.

## Solution: Update Firestore Security Rules

1. **Go to Firebase Console**
   - Visit: https://console.firebase.google.com/
   - Select your project: `final-project-71655`

2. **Navigate to Firestore Database**
   - Click on "Firestore Database" in the left sidebar
   - Click on the "Rules" tab

3. **Update Security Rules**
   
   **For Testing/Development (Temporary - allows all reads/writes):**
   ```javascript
   rules_version = '2';
   service cloud.firestore {
     match /databases/{database}/documents {
       match /{document=**} {
         allow read, write: if true;
       }
     }
   }
   ```
   
   **For Production (More Secure - allows writes to preferences collection):**
   ```javascript
   rules_version = '2';
   service cloud.firestore {
     match /databases/{database}/documents {
       // Allow reads and writes to preferences collection
       match /preferences/{preferenceId} {
         allow read, write: if true;
       }
       
       // Deny all other access
       match /{document=**} {
         allow read, write: if false;
       }
     }
   }
   ```
   
   **For Production with Authentication (Most Secure):**
   ```javascript
   rules_version = '2';
   service cloud.firestore {
     match /databases/{database}/documents {
       // Allow authenticated users to read/write their own preferences
       match /preferences/{preferenceId} {
         allow read, write: if request.auth != null;
       }
     }
   }
   ```

4. **Publish the Rules**
   - Click "Publish" button
   - Wait a few seconds for rules to propagate

5. **Test Again**
   - Refresh your React app
   - Try submitting the form again
   - Check the browser console for success messages

## Verify Rules Are Active
After publishing, you should see a success message. The rules take effect immediately but may take a few seconds to propagate globally.

## Troubleshooting
- If errors persist, check the browser console for specific error codes
- Make sure you're using the correct Firebase project
- Verify your Firebase config in `src/firebase.js` matches your project

