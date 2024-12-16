
export interface FoodItem {
  id: number;
  name: string;
  price: string;
  src: string;
  heartIcon?: boolean;
  cartIcon?: boolean;
  discountPrice?: string;
  arrowIcon?: boolean;
  discountBtn?: boolean;
}


export const ourFoodArray: FoodItem[] = [
    {
        id:1,
        discountBtn: false,
        discountPrice: "$45.00",
        arrowIcon: false,
        heartIcon: true,
        cartIcon: true,
        src: "/images/freshlime.png",
       name: "Fresh Lime",
        price: "$38.00",

        
       
      },
      {
        id:2,
        discountBtn: false,
        trashIcon: false,
        heartIcon: false,
        cartIcon: false,
        src: "/images/muffin.png",
        name: "Chocolate Muffin",
        price:"$28.00",
        
      },
      {
        id:2,
        discountBtn: false,
        discountPrice: "$45.00",
        heartIcon: false,
        cartIcon: false,
        src: "/images/burgerk.png",
        name: "Burger",
        price: "$21.00",
        
      },
      {
        id:3,
        discountBtn: false,
        trashIcon: false,
        heartIcon: true,
        cartIcon: true,
        src: "/images/.png",
        Heading: "Country Burger",
        price: "$45.00",
      
      },
      {
        id:4,
        discountBtn: false,
        discountPrice: "$45.00",
        trashIcon: false,
        heartIcon: true,
        cartIcon: true,
        src: "/images/.png",
        name: "Pizza",
        price: "$21.00",
        
      },
      {
        id:5,
        discountBtn: false,
        discountPrice: "$45.00",
        trashIcon: false,
        heartIcon: true,
        cartIcon: true,
        src: "/images/.png",
        name: "Pizza",
        price: "$21.00",
        
      },
      {
        id:5,
        discountBtn: false,
        discountPrice: "$45.00",
        trashIcon: false,
        heartIcon: true,
        cartIcon: true,
        src: "/images/.png",
        name: "Pizza",
        price: "$21.00",
        
      },
]

