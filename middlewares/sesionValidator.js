import jwt from 'jsonwebtoken';
const SECRET_KEY = process.env.SECRET_KEY;


 export const authenticate = (req, res, next) => {
  const token = req.cookies.access_token;
  console.log("entra?");
  if (!token) {
    return res.status(401).json({ message: 'No autorizado' });
  }

  try {
    const decoded = jwt.verify(token, SECRET_KEY);
    req.user = decoded;
    next();
  } catch (err) {
    return res.status(401).json({ message: 'Token inválido o expirado' });
  }
};
