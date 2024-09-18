const initialState = {
  products: [],
  loading: true,
  error: null,
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'PRODUCT_LIST_REQUEST':
      return { ...state, loading: true };
    case 'PRODUCT_LIST_SUCCESS':
      return { ...state, loading: false, products: action.payload };
    case 'PRODUCT_LIST_FAIL':
      return { ...state, loading: false, error: action.payload };
    case 'PRODUCT_DETAILS_REQUEST':
      return { ...state, loading: true };
    case 'PRODUCT_DETAILS_SUCCESS':
      return { ...state, loading: false, product: action.payload };
    case 'PRODUCT_DETAILS_FAIL':
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default productReducer;