import Subcription from '../models/subscription.model.js';

export const createSubscription = async (req, res, next) => {
    try {
        const subscription = await Subcription.create({
            ...req.body,
            user: req.user._id,
        })

        res.status(201).json({ success: true, data: subscription});
    } catch (error) {
        next(error);
    }
}

export const getUserSubcription = async(req, res, next) => {
    try {
        // Check if the user is the same as the one in the token
        if(req.user.id != req.params.id) {
            const error = new Error("You are not the owner of the account");
            error.status = 401;
            throw error;
        }

        const subcriptions = await Subcription.find({ user: req.params.id });

        res.status(200).json({ success: true, data: subcriptions});
    } catch (error) {
        next(error);
    }
}