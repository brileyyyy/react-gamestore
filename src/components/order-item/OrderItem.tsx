import React from 'react';
import {Game} from '../../pages/home-page/games';
import './OrderItem.scss'
import {AiOutlineClose} from 'react-icons/ai';
import {useAppDispatch} from '../../hooks/useAppDispatch';
import {removeItemFromCart} from '../../store/reducers/cartReducer';

const OrderItem: React.FC<{game: Game}> = ({game}) => {
    const dispatch = useAppDispatch()

    const removeHandle = () => {
        dispatch(removeItemFromCart(game.id))
    }

    return (
        <div className='order-item'>
            <div className="order-item__cover">
                <img src={game.image} alt=''/>
            </div>
            <div className='order-item__details'>
                <div className="order-item__title">
                    <span>{game.title}</span>
                </div>
                <div className="order-item__price">
                    <span>{game.price} руб.</span>
                </div>
            </div>
            <AiOutlineClose
                className='order-item__delete-icon'
                size={26}
                onClick={removeHandle}
            />
        </div>
    );
};

export default OrderItem;