# Microsoft OAuth 2.0 Sign-In Page

A beautiful, modern sign-in page that matches the Microsoft login interface and integrates with Microsoft OAuth 2.0 authentication.

## Features

✨ **Exact Design Match** - Recreates the Microsoft sign-in interface with precision
- Clean, minimal white card design
- Gradient background (soft pastels)
- Microsoft logo
- Professional typography

🔐 **OAuth 2.0 Integration** - Ready for Microsoft authentication
- Email/phone validation
- Form submission handling
- Microsoft OAuth 2.0 endpoint redirect
- Error messaging

📱 **Responsive Design** - Works on all devices
- Mobile-friendly
- Tablet support
- Desktop optimized

⚡ **Smooth Interactions**
- Animated card entrance
- Hover effects on buttons and links
- Input focus states
- Loading states

## Setup Instructions

### 1. Register Your App on Azure

1. Go to [Azure Portal](https://portal.azure.com)
2. Navigate to **Azure Active Directory** → **App registrations** → **New registration**
3. Fill in the app details:
   - **Name**: Your app name
   - **Supported account types**: Accounts in any organizational directory and personal Microsoft accounts
   - **Redirect URI**: `http://localhost:3000/callback` (for local development)
4. Click **Register**
5. Copy your **Application (client) ID**

### 2. Configure Your Credentials

Open `script.js` and update:

```javascript
const AZURE_APP_ID = 'YOUR_AZURE_APP_ID'; // Paste your Application ID
const REDIRECT_URI = 'http://localhost:3000/callback'; // Update for production
```

### 3. Set Up Redirect URI

In Azure Portal:
1. Go to your app → **Authentication**
2. Under **Redirect URIs**, add your callback URL:
   - For local: `http://localhost:3000/callback`
   - For production: `https://yourdomain.com/callback`
3. Add a web platform if not already present
4. Click **Save**

### 4. Run Locally

```bash
# Using Python 3
python -m http.server 3000

# Or using Node.js with http-server
npx http-server -p 3000
```

Then open `http://localhost:3000` in your browser.

## File Structure

```
├── index.html      # Main HTML structure
├── styles.css      # Complete styling (exact Microsoft design)
├── script.js       # Form handling and OAuth logic
└── README.md       # Documentation
```

## How It Works

1. **User enters email/phone** - Input validation checks format
2. **Clicks Next** - Form validation and account check simulation
3. **Redirects to Microsoft** - OAuth 2.0 authorization endpoint
4. **User authenticates** - Completes Microsoft authentication flow
5. **Redirects back** - Your callback URL receives the authorization code

## OAuth 2.0 Flow

```
Your App → Microsoft OAuth Endpoint → User Authentication → Redirect URI with Auth Code → Token Exchange
```

## Security Notes

⚠️ **Important**: Never commit your Azure App ID or secrets to version control.

- Use environment variables for production
- Keep client secrets secure on the backend
- Implement proper token handling
- Use HTTPS in production

## Customization

### Change Colors
In `styles.css`, update the button color:
```css
.next-button {
    background-color: #0078d4; /* Change this */
}
```

### Modify Background Gradient
Update the gradient in `.background`:
```css
.background {
    background: linear-gradient(/* your gradient */);
}
```

### Add Additional Scopes
In `script.js`, modify the SCOPES array:
```javascript
const SCOPES = ['user.read', 'email', 'profile']; // Add more as needed
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

MIT License - Feel free to use this in your projects!

## Support

For issues or questions:
1. Check the [Microsoft Authentication Documentation](https://learn.microsoft.com/en-us/azure/active-directory/develop/)
2. Review the [OAuth 2.0 Specification](https://tools.ietf.org/html/rfc6749)
3. Open an issue in this repository

---

**Note**: This is a demonstration OAuth 2.0 implementation. For production use, implement proper backend token exchange and security measures.