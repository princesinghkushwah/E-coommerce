const initialState = {
  products: [
    {
      id: 1,
      name: "Zone XT Wns Sports Lace-Up Shoes",
      image:
        "https://assets.ajio.com/medias/sys_master/root/ha8/h87/15738468794398/puma_black_zone_xt_wns_sports_lace-up_shoes.jpg",
      price: 20,
      discount: 2,
      discountPrice: 20 - (2 / 100) * 20,
      quantity: 1,
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit architecto neque numquam eaque debitis aperiam ea totam. Quas minima excepturi facere ullam perspiciatis dicta illum labore, nihil impedit distinctio itaque.",
    },
    {
      id: 2,
      name: "Low-Top Lace-Up Casual Shoes",
      image:
        "https://assets.ajio.com/medias/sys_master/root/20210701/yDIT/60dd6f5ef997ddb31216ec89/arbunore_grey_low-top_lace-up_casual_shoes.jpg",
      price: 30,
      discount: 5,
      discountPrice: 30 - (5 / 100) * 30,
      quantity: 1,
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit architecto neque numquam eaque debitis aperiam ea totam. Quas minima excepturi facere ullam perspiciatis dicta illum labore, nihil impedit distinctio itaque.",
    },
    {
      id: 3,
      name: "Textured Lace-Up Casual Shoes",
      image:
        "https://assets.ajio.com/medias/sys_master/root/20211103/vLO6/61818636aeb2690110b7493e/arbunore_grey_textured_lace-up_casual_shoes.jpg",
      price: 40,
      discount: 10,
      discountPrice: 40 - (10 / 100) * 40,
      quantity: 1,
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit architecto neque numquam eaque debitis aperiam ea totam. Quas minima excepturi facere ullam perspiciatis dicta illum labore, nihil impedit distinctio itaque.",
    },
    {
      id: 4,
      name: "Textured Lace-Up Casual Shoes",
      image:
        "https://assets.ajio.com/medias/sys_master/root/20211208/QiQA/61afc78daeb2690110001a44/walkstyle_sea_blue_%26_white_mid-top_lace-up_casual_shoes_.jpg",
      price: 35,
      discount: 5,
      discountPrice: 35 - (5 / 100) * 35,
      quantity: 1,
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit architecto neque numquam eaque debitis aperiam ea totam. Quas minima excepturi facere ullam perspiciatis dicta illum labore, nihil impedit distinctio itaque.",
    },
    {
      id: 5,
      name: "Panelled Glossy Oxfords with Broguing",
      image:
        "https://assets.ajio.com/medias/sys_master/root/ha8/h2d/12146120785950/stelvio_black_panelled_glossy_oxfords_with_broguing.jpg",
      price: 25,
      discount: 5,
      discountPrice: 25 - (5 / 100) * 25,
      quantity: 1,
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit architecto neque numquam eaque debitis aperiam ea totam. Quas minima excepturi facere ullam perspiciatis dicta illum labore, nihil impedit distinctio itaque.",
    },
    {
      id: 6,
      name: "Slip-On Formal Shoes with Tassels",
      image:
        "https://assets.ajio.com/medias/sys_master/root/20210330/TtJ6/6062232df997dd7b6458aaa1/stelvio_black_slip-on_formal_shoes_with_tassels.jpg",
      price: 36,
      discount: 8,
      discountPrice: 36 - (8 / 100) * 36,
      quantity: 1,
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit architecto neque numquam eaque debitis aperiam ea totam. Quas minima excepturi facere ullam perspiciatis dicta illum labore, nihil impedit distinctio itaque.",
    },
    {
      id: 7,
      name: "Lace-Up Formal Shoes with Broguing",
      image:
        "https://assets.ajio.com/medias/sys_master/root/h01/ha5/11139255304222/stelvio_brown_lace-up_formal_shoes_with_broguing.jpg",
      price: 36,
      discount: 8,
      discountPrice: 36 - (8 / 100) * 36,
      quantity: 1,
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit architecto neque numquam eaque debitis aperiam ea totam. Quas minima excepturi facere ullam perspiciatis dicta illum labore, nihil impedit distinctio itaque.",
    },
    {
      id: 8,
      name: "Textured Lace-up Sports Shoes",
      image:
        "https://assets.ajio.com/medias/sys_master/root/20210331/FQM3/606397a7aeb269a9e32de796/campus_white_textured_lace-up_sports_shoes.jpg",
      price: 56,
      discount: 9,
      discountPrice: 56 - (9 / 100) * 56,
      quantity: 1,
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit architecto neque numquam eaque debitis aperiam ea totam. Quas minima excepturi facere ullam perspiciatis dicta illum labore, nihil impedit distinctio itaque.",
    },
  ],
  product: {},
};
const productsReducer = (state = initialState, action) => {
  console.log(action.id);
  switch (action.type) {
    case "PRODUCT":
      return {
        ...state,
        product: state.products.find(
          (product) => product.id === parseInt(action.id)
        ),
      };
    default:
      return state;
  }
};

export default productsReducer;
