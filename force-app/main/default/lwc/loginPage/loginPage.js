import { LightningElement, track } from 'lwc';

export default class LoginPage extends LightningElement {
    @track username = '';
    @track password = '';

    handleInputChange(event) {
        const field = event.target.label.toLowerCase();
        if (field === 'username') {
            this.username = event.target.value;
        } else if (field === 'password') {
            this.password = event.target.value;
        }
    }

    handleLogin() {
        // Handle login logic here
        console.log('Username:', this.username);
        console.log('Password:', this.password);
    }
}