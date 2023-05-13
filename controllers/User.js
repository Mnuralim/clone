import User from "../models/userModel.js";

export const getAllUser = async (req, res) => {
  try {
    const data = await User.find();
    res.status(200).json(data);
  } catch (error) {
    console.log(error);
  }
};

export const Login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const data = await User.create({
      email: email,
      password: password,
    });
    res.status(200).json({ data });
  } catch (error) {
    console.log(error);
  }
};
