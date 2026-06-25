import React, { createContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  // 1. Dark Mode State
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('a1_dark_mode');
    return saved ? JSON.parse(saved) : false;
  });

  // User Credentials State
  const [userEmail, setUserEmail] = useState(() => {
    return localStorage.getItem('a1_user_email') || 'guest@a1emporium.com';
  });

  const [userName, setUserName] = useState(() => {
    return localStorage.getItem('a1_user_name') || 'Anila Pindi';
  });

  const loginUser = (email, name) => {
    setUserEmail(email);
    setUserName(name);
    localStorage.setItem('a1_user_email', email);
    localStorage.setItem('a1_user_name', name);
    // Sync to address fullName
    setAddress(prev => ({
      ...prev,
      fullName: name
    }));
  };

  const logoutUser = () => {
    setUserEmail('guest@a1emporium.com');
    setUserName('Anila Pindi');
    localStorage.removeItem('a1_user_email');
    localStorage.removeItem('a1_user_name');
  };

  // Apply dark class to body element
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-theme');
    } else {
      document.body.classList.remove('dark-theme');
    }
    localStorage.setItem('a1_dark_mode', JSON.stringify(darkMode));
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(prev => !prev);
    addNotification(`Theme switched to ${!darkMode ? 'Dark' : 'Light'} Mode`);
  };

  // 2. Shopping Cart List State
  const [cartList, setCartList] = useState(() => {
    const savedCart = localStorage.getItem('a1_cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem('a1_cart', JSON.stringify(cartList));
  }, [cartList]);

  // 3. Wishlist State
  const [wishlist, setWishlist] = useState(() => {
    const savedWishlist = localStorage.getItem('a1_wishlist');
    return savedWishlist ? JSON.parse(savedWishlist) : [];
  });

  useEffect(() => {
    localStorage.setItem('a1_wishlist', JSON.stringify(wishlist));
  }, [wishlist]);

  // 4. Past Orders State
  const [orders, setOrders] = useState(() => {
    const savedOrders = localStorage.getItem('a1_orders');
    return savedOrders ? JSON.parse(savedOrders) : [];
  });

  useEffect(() => {
    localStorage.setItem('a1_orders', JSON.stringify(orders));
  }, [orders]);

  // 5. Shipping Address State
  const [address, setAddress] = useState(() => {
    const savedAddress = localStorage.getItem('a1_address');
    return savedAddress ? JSON.parse(savedAddress) : {
      fullName: 'Anila Pindi',
      phone: '+91 98765 43210',
      streetAddress: 'Flat 402, Golden Residency, Road No. 4',
      city: 'Hyderabad',
      state: 'Telangana',
      zipCode: '500033',
      country: 'India'
    };
  });

  useEffect(() => {
    localStorage.setItem('a1_address', JSON.stringify(address));
  }, [address]);

  // 6. Compare Products State (Max 3)
  const [compareList, setCompareList] = useState(() => {
    const saved = localStorage.getItem('a1_compare');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('a1_compare', JSON.stringify(compareList));
  }, [compareList]);

  const addToCompare = (product) => {
    setCompareList(prev => {
      const exists = prev.find(item => item.id === product.id);
      if (exists) {
        addNotification(`Removed ${product.name} from comparison`);
        return prev.filter(item => item.id !== product.id);
      }
      if (prev.length >= 3) {
        addNotification('Comparison limit reached! Max 3 products.');
        alert('You can only compare up to 3 products at a time.');
        return prev;
      }
      addNotification(`Added ${product.name} to comparison`);
      return [...prev, product];
    });
  };

  const removeFromCompare = (id) => {
    setCompareList(prev => prev.filter(item => item.id !== id));
    addNotification('Product removed from comparison');
  };

  const clearCompare = () => {
    setCompareList([]);
    addNotification('Cleared comparison list');
  };

  // 7. Recently Viewed State (Max 6)
  const [recentlyViewed, setRecentlyViewed] = useState(() => {
    const saved = localStorage.getItem('a1_recent_viewed');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('a1_recent_viewed', JSON.stringify(recentlyViewed));
  }, [recentlyViewed]);

  const addToRecentlyViewed = (product) => {
    setRecentlyViewed(prev => {
      const filtered = prev.filter(item => item.id !== product.id);
      return [product, ...filtered].slice(0, 6);
    });
  };

  // 8. Notifications Log State
  const [notifications, setNotifications] = useState(() => {
    return [
      { id: 'notif-welcome', text: 'Welcome to A1 Emporium! Enjoy 10% auto-discount.' }
    ];
  });

  const addNotification = (text) => {
    setNotifications(prev => [
      { id: `notif-${Date.now()}`, text },
      ...prev
    ].slice(0, 8)); // keep last 8
  };

  const clearNotifications = () => {
    setNotifications([]);
  };

  // 9. Gift Card Deduction state (₹)
  const [appliedGiftCard, setAppliedGiftCard] = useState(0);

  const applyGiftCard = (amount) => {
    setAppliedGiftCard(amount);
    if (amount > 0) {
      addNotification(`Gift card applied: saved ₹${amount}!`);
    } else {
      addNotification('Gift card removed');
    }
  };

  // Cart Handlers
  const onIncreaseQuantity = (cartItemId) => {
    setCartList(prev =>
      prev.map(item =>
        item.cartItemId === cartItemId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const onDecreaseQuantity = (cartItemId) => {
    setCartList(prev =>
      prev
        .map(item =>
          item.cartItemId === cartItemId ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter(item => item.quantity > 0)
    );
  };

  const addToCart = (product, size = 'Free Size', color = 'Default') => {
    setCartList(prev => {
      const cartItemId = `${product.id}-${size}-${color}`;
      const itemExists = prev.find(item => item.cartItemId === cartItemId);
      addNotification(`Added ${product.name} (Size: ${size}) to bag`);
      if (itemExists) {
        return prev.map(item =>
          item.cartItemId === cartItemId
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prev, {
          ...product,
          cartItemId,
          quantity: 1,
          selectedSize: size,
          selectedColor: color
        }];
      }
    });
  };

  const removeFromCart = (cartItemId) => {
    setCartList(prev => prev.filter(item => item.cartItemId !== cartItemId));
    addNotification('Product removed from bag');
  };

  const clearCart = () => {
    setCartList([]);
  };

  // Wishlist Handlers
  const toggleWishlist = (product) => {
    setWishlist(prev => {
      const exists = prev.find(item => item.id === product.id);
      if (exists) {
        addNotification(`Removed ${product.name} from wishlist`);
        return prev.filter(item => item.id !== product.id);
      } else {
        addNotification(`Added ${product.name} to wishlist`);
        return [...prev, product];
      }
    });
  };

  const isInWishlist = (productId) => {
    return wishlist.some(item => item.id === productId);
  };

  // Orders Handlers
  const addOrder = (order) => {
    setOrders(prev => [order, ...prev]);
    addNotification(`Order placed: ${order.orderId}`);
  };

  const saveAddress = (addr) => {
    setAddress(addr);
    addNotification('Shipping address updated');
  };

  return (
    <CartContext.Provider
      value={{
        darkMode,
        toggleDarkMode,
        cartList,
        wishlist,
        orders,
        address,
        compareList,
        recentlyViewed,
        notifications,
        appliedGiftCard,
        userName,
        userEmail,
        loginUser,
        logoutUser,
        addToCart,
        removeFromCart,
        onIncreaseQuantity,
        onDecreaseQuantity,
        clearCart,
        toggleWishlist,
        isInWishlist,
        addOrder,
        saveAddress,
        addToCompare,
        removeFromCompare,
        clearCompare,
        addToRecentlyViewed,
        addNotification,
        clearNotifications,
        applyGiftCard
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;