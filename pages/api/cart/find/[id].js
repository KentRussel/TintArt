import dbConnect from '../../../../utils/dbConnect'
import Cart from '../../../../models/Cart'
import { response } from '../../../../services/response'

dbConnect()

export default async (req, res) => {
    switch (req.method) {
        case 'GET':
            try {
                const cart = await Cart.find({ user_id: req.query.id }).populate('product_id')
                return response({
                    res,
                    status_code: 200,
                    success: true,
                    data: cart,
                })
            } catch (error) {
                response({ res, status_code: 400, success: false, error })
            }
            break
        default:
            response({ res, status_code: 400, success: false, error: 'asd' })
            break
    }
}
