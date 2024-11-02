const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

// Registro de usuario
exports.register = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    // Encriptar la contraseña antes de guardarla
    const hashedPassword = await bcrypt.hash(password, 10);

    // Crear un nuevo usuario con la contraseña encriptada
    const newUser = new User({ username, email, password: hashedPassword });
    await newUser.save();

    res.status(201).json({ message: "Registrado con éxito" });
  } catch (error) {
    res.status(400).json({ message: "Error al registrar el usuario", error });
  }
};

// Inicio de sesión de usuario
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (user && await bcrypt.compare(password, user.password)) {
      // Generar un token JWT al iniciar sesión correctamente
      const token = jwt.sign(
        { id: user._id, email: user.email },
        process.env.JWT_SECRET,
        { expiresIn: '1h' } // El token expira en 1 hora
      );

      res.status(200).json({ message: "Ingreso exitoso", token });
    } else {
      res.status(401).json({ message: "Datos incorrectos, intente de nuevo" });
    }
  } catch (error) {
    res.status(500).json({ message: "Error en el servidor", error });
  }
};
