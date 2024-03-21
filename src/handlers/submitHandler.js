import { AuthService } from "/src/services/auth.service.js";

export async function submitCallback(e) {
    // vous empêchez le comportement par défaut d'un formulaire d'avoir lieu.
    e.preventDefault();
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    await AuthService.login(emailInput.value, passwordInput.value);
    const form = document.getElementById("login-form");
    // vous appelez sur l'élément HTML form la méthode reset()
    // pour le réinitialiser
    form.reset();
  }