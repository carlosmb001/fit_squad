const router = require("express").Router();
const homeRoutes = require("./homeRoutes");
const dashboardRoutes = require("./dashboardRoutes");
const profileRoutes = require("./profileRoutes");
const historyRoutes = require("./historyRoutes");
const authRoutes = require("./authRoutes");
const apiRoutes = require("./api");

router.use("/", homeRoutes);
router.use("/api", apiRoutes);
router.use("/user", authRoutes);
router.use("/dashboard", dashboardRoutes);
router.use("/profile", profileRoutes);
router.use("/history", historyRoutes);

module.exports = router;
