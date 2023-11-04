import dbConnect from '../../../utils/dbConnect'
import Cart from '../../../models/Cart'
import { response } from '../../../services/response'

dbConnect()

export default async (req, res) => {
  switch (req.method) {
    case 'GET':
      try {
        const all_cart = await Cart.find()
        response({ res, status_code: 200, success: true, data: all_cart })
      } catch (error) {
        response({ res, status_code: 400, success: false, error })
      }
      break
    case 'POST':
      try {
        const add_cart = await Cart.create(req.body)
        response({ res, status_code: 201, success: true, data: add_cart })
      } catch (error) {
        response({ res, status_code: 400, success: false, error })
      }
      break
    default:
      response({ res, status_code: 400, success: false })
      break
  }
}
