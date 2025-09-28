export const getHealth = async (_, res) => {
    return res.status(200).json({ message: 'Server is running OK!' });
}
