import React from "react";
import Event from './Event'

const Calendar = () => {
    return (
        <div className="calendar">
            <table>
                <tbody>
                    <tr>
                        <td><Event name='Birria-Landia' type='Mexican' color='green' image='https://pyxis.nymag.com/v1/imgs/38c/2ac/b02a093f6b846ebd1aca78b0d59c7e427a-birria-1.rsocial.w1200.jpg' link='https://thebirrialandia.com/menu/' /></td>
                        <td><Event name='Mysttik Masala' type='Indian' color='green' image='https://res.cloudinary.com/the-infatuation/image/upload/c_fill,w_1200,ar_4:3,g_auto,f_auto/cms/reviews/mysttik-masala/banners/1561989798.42' link='https://indianfoodny.com/' /></td>
                        <td><Event name='Jerk Pan' type='Jamaican' color='green' image='https://infatuation.imgix.net/media/images/reviews/jerk-pan/banners/1561989308.8.jpg' link='https://www.allmenus.com/ny/new-york/360888-jerk-pan/menu/' /></td>
                        <td><Event name='Patacon Pisao' type='Venezuelan' color='green' image='https://live.staticflickr.com/8088/8400188739_53b16c7d13_z.jpg' link = 'https://www.pataconpisaonyc.com/menus/'/></td>
                        <td><Event name='Moms Mono' type='Tibetan' color='green' image='https://infatuation.imgix.net/media/images/reviews/moms-momo/banners/1606245507.888788.png' link='https://www.restaurantji.com/ny/jackson-heights/moms-momo-/menu/' /></td>
                    </tr>
                    <tr>
                        <td><Event name='Makina Cafe' type='Ethiopian' color='green' image='https://fastly.4sqi.net/img/general/600x600/784042_29bZZHPGisHnWqyIuuXMo8D2zzW7QS6Hft7Vv15SH_I.jpg' link='https://makinacafenyc.com/' /></td>
                        <td><Event name='Uncle Gussys' type='Greek' color='green' image='https://d3hbe0kmbam4a5.cloudfront.net/photos/67e1cdb7-bc27-4f26-8343-851bfaa7fc22.jpg' link='https://unclegussys.com/menus/' /></td>
                        <td><Event name='Lings Sweet Mini Cakes' type='Chinese' color='green' image='https://fastly.4sqi.net/img/general/600x600/61129566_7PLEKHNMZ-VNqzYx2jWRVZGrZ42PdPX0M-j9Ftpg8Ts.jpg' link='https://canalstreet.market/' /></td>
                        <td><Event name='Tong' type='Bangladeshi' color='green' image='https://static01.nyt.com/images/2019/09/04/dining/29hungry-tong2/merlin_159654336_783be212-7726-485e-9250-4793a743af41-jumbo.jpg' link='https://www.facebook.com/Bangladeshistreetfoods/' /></td>
                        <td><Event name='The Halal Guys' type='Middle Eastern' color='green' image='https://nypost.com/wp-content/uploads/sites/2/2014/08/081114featureshalaguysbz-1.jpg?quality=75&strip=all&w=1024' link='https://thehalalguys.com/menu/' /></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
export default Calendar;