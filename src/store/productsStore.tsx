
import {create} from "zustand";
import {createJSONStorage, persist} from "zustand/middleware";


type Actions = {
  getProducts:()=> Promise<void>;
}
interface Product {
  id: number,
  image: string;
  name: string;
  brand: string;
  description: string;
  category: string;
  price: number,
  gallery: any,
}


interface ProductState {
  products: Product[]
}

export const useProductsStore = create(persist<ProductState & Actions>(
  (set)=>({
    products: [],
    getProducts: async ()=>{
      const products = await (await fetch('/db.json')).json();
      set(state=>({
        ...state,
        products
      }))
    }
  }),{
    name:"products",
    storage: createJSONStorage(() => sessionStorage)
  }
));





// import {createJSONStorage, persist} from "zustand/middleware";

// // type State = {
// //   productsArr:any;
// // }

// type Actions = {
//   setProductsArr:(products:any)=>void;
//   getProducts:(products:any)=>void;
// }
// interface Products {
//   id: number,
//   name: string;
//   brand: string;
//   description: string;
//   category: string;
//   price: number,
//   gallery: any,
// }

// interface ProductState {
//   productsArr:any,
//   products: Products[]
// }

// export const useProductsStore = create<ProductState & Actions>(
//   (set)=>({
//     productsArr:null,
//     products: [],
//     setProductsArr:(productsArr:any)=>set((state)=>({
//       productsArr,
//     })),
//     getProducts: async ()=>{
//       const res = await fetch('/db.js')
//       const data =res.json()
//       console.log(data)
//     }
//   })
// );

// type State = {
//   products: object,
//   // name: string;
//   // brand: string;
//   // description: string;
//   // category: string;
//   // price: number,
//   // gallery: [],
// }

// type Actions = {
//   setProducts: (user: object) => void;
//   setToken: (token: string) => void;
//   setAdmin: (isAdmin: boolean) => void;
//   setSuper: (isAdmin: boolean) => void;
//   logout: () => void;
// }


// export const useProductsStore = create((set:any)=>({
//   products: null,
//   setProducts:(products:any)=>set((state)=>({
//     products
//   }))
// }))
