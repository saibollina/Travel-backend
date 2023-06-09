import { Router} from 'express';
import bodyParser from 'body-parser';
import { createOrder, getAllOrders, getOrder, updateOrder,searchOrder, deleteAllOrders,deleteOrder, getUserOrders } from '../controller/order.controller.js';

export const orderRouter = Router();

orderRouter.get('/orders', getAllOrders);
orderRouter.get("/orders/search", searchOrder);
orderRouter.get('/orders/user/:id', getUserOrders);
orderRouter.get('/orders/:orderId', getOrder);
orderRouter.post('/orders',[bodyParser.urlencoded({ extended: false }),bodyParser.json()],createOrder)
orderRouter.delete("/orders/:id", deleteOrder);
orderRouter.delete("/orders/", deleteAllOrders);
orderRouter.put("/orders/:id", updateOrder);
