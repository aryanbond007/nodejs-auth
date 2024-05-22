import User from "../models/userModel.js";

export  class googleSignInController {
 
    // signInSuccess = async (req, res) => {
    //     console.log("Google Sign In");
    //     const userData =  req.user._json;
    //     console.log(userData);
    //     const { email, name, sub } = userData;
    //     // console.log(sub, name, email);

    //     if (email) {
    //         const user = await User.findOne({email:email});
    //         if (user) {
    //             req.session.userEmail = email;
    //             return res.status(200).render("homepage");
    //         }
    //         const newUser = new User({username:name, email:email, password:sub});
    //         await newUser.save();
    //         req.session.userEmail = email;
    //         return res.status(200).render("homepage");
    //     }else {
    //         res.status(403).json({ error: true, message: "Not Authorized" });
    //     }
    // }
    // signInSuccess = async (req, res) => {
    //     console.log("Google Sign In");
        
    //     try {
    //         if (!req.user || !req.user._json) {
    //             return res.status(403).json({ error: true, message: "Not Authorized" });
    //         }
    
    //         const { email, name, sub } = req.user._json;
    //         console.log(req.user._json);
    
    //         if (email) {
    //             const user = await User.findOne({ email });
    
    //             if (user) {
    //                 req.session.userEmail = email;
    //                 return res.status(200).render("homepage");
    //             }
    
    //             const newUser = new User({ username: name, email, password: sub });
    //             await newUser.save();
    //             req.session.userEmail = email;
    //             return res.status(200).render("homepage");
    //         } else {
    //             return res.status(403).json({ error: true, message: "Not Authorized" });
    //         }
    //     } catch (error) {
    //         console.error("Error during sign-in:", error);
    //         return res.status(500).json({ error: true, message: "Internal Server Error" });
    //     }
    // };
    // signInSuccess = async (req, res) => {
    //     console.log("Google Sign In");
    
    //     try {
    //         if (!req.user) {
    //             console.error("No user object found in request");
    //             return res.status(403).json({ error: true, message: "Not Authorized" });
    //         }
    
    //         const userData = req.user._json;
    //         console.log("User data from Google:", userData);
    
    //         if (!userData) {
    //             console.error("No user data found in req.user._json");
    //             return res.status(403).json({ error: true, message: "Not Authorized" });
    //         }
    
    //         const { email, name, sub } = userData;
    
    //         if (!email) {
    //             console.error("Email not found in user data");
    //             return res.status(403).json({ error: true, message: "Not Authorized" });
    //         }
    
    //         const user = await User.findOne({ email });
    
    //         if (user) {
    //             req.session.userEmail = email;
    //             return res.status(200).render("homepage");
    //         }
    
    //         const newUser = new User({ username: name, email, password: sub });
    //         await newUser.save();
    //         req.session.userEmail = email;
    //         return res.status(200).render("homepage");
    
    //     } catch (error) {
    //         console.error("Error during sign-in:", error);
    //         return res.status(500).json({ error: true, message: "Internal Server Error" });
    //     }
    // };
    signInSuccess = async (req, res) => {
        console.log("Google Sign In");
    
        try {
            if (!req.user) {
                console.error("No user object found in request");
                return res.status(403).json({ error: true, message: "Not Authorized" });
            }
    
            const userData = req.user._json;
            console.log("User data from Google:", userData);
    
            if (!userData) {
                console.error("No user data found in req.user._json");
                return res.status(403).json({ error: true, message: "Not Authorized" });
            }
    
            const { email, name, sub } = userData;
    
            if (!email) {
                console.error("Email not found in user data");
                return res.status(403).json({ error: true, message: "Not Authorized" });
            }
    
            const user = await User.findOne({ email });
    
            if (user) {
                req.session.userEmail = email;
                return res.status(200).render("homepage");
            }
    
            const newUser = new User({ username: name, email, password: sub });
            await newUser.save();
            req.session.userEmail = email;
            return res.status(200).render("homepage");
    
        } catch (error) {
            console.error("Error during sign-in:", error);
            return res.status(500).json({ error: true, message: "Internal Server Error" });
        }
    };
    
    

    signInFailed = (req, res) => {
        res.status(401).json({
            error: true,
            message: "Log in failure",
        });
    }

}