export const handleLogin = async (e) => {
  e.preventDefault();
  try {
    await firebase.auth().signInWithEmailAndPassword(email, password);
    // Inicio de sesión exitoso
  } catch (error) {
    console.error("Error al iniciar sesión:", error.message);
  }
};

export const handleLogout = async () => {
  try {
    await firebase.auth().signOut();
    // Cierre de sesión exitoso
  } catch (error) {
    console.error("Error al cerrar sesión:", error.message);
  }
};

export const handleRegister = async (e) => {
  e.preventDefault();
  try {
    await firebase.auth().createUserWithEmailAndPassword(email, password);
    // Registro exitoso
  } catch (error) {
    console.error("Error al registrar usuario:", error.message);
  }
};

export const handleForgotPassword = async () => {
  try {
    await firebase.auth().sendPasswordResetEmail(email);
    alert("Se ha enviado un correo electrónico para restablecer tu contraseña.");
  } catch (error) {
    console.error("Error al enviar correo electrónico de restablecimiento de contraseña:", error.message);
  }
};
