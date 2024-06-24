const adminMiddleware = async (req, res, next) => {
    try {
        console.log(req.user.isHost);
        const adminRole = req.user.isHost;
        if (!adminRole) {
            return res.status(403).json({ message: "You are not an Host" });
        }
        next();
    } catch (error) {
       next(error);
    }
}

module.exports = adminMiddleware;