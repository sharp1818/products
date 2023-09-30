try {
    for (const producto of data.productos) {
      const productoRef = doc(db, 'products', producto.name);
      for (const colection of producto.coleccion) {
        const collectionRef = collection(productoRef, colection.name);
        for (const item of colection.productos) {
          await setDoc(doc(collectionRef, item.name), item.data);
        }
      }
    }
  } catch (error) {
    console.error(error);
  }