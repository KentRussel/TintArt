import dbConnect from '../../../utils/dbConnect'
import OrderDetails from '../../../models/OrderDetails'
import OrderProduct from '../../../models/OrderProduct'

import { response } from '../../../services/response'

dbConnect()

export default async (req, res) => {
  switch (req.method) {
    case 'GET':
      try {
        const all_order_details = await OrderDetails.find().populate("products").sort({ created_at: -1 })
        response({ res, status_code: 200, success: true, data: all_order_details })
      } catch (error) {
        response({ res, status_code: 400, success: false, error: error?.message })
      }
      break
    case 'POST':
      try {
        const add_order_details = await OrderDetails.create(req.body)
        response({ res, status_code: 201, success: true, data: add_order_details })
      } catch (error) {
        response({ res, status_code: 400, success: false, error })
      }
      break
    default:
      response({ res, status_code: 400, success: false })
      break
  }
}
