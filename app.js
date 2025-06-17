import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, TouchableOpacity, StyleSheet, Image, ScrollView, Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'react-native';
//comentario

const Stack = createNativeStackNavigator();

const productos = [
  {
    id: '1',
    nombre: 'Camisa nike',
    precio: 29.99,
    imagen: 'https://permanent.mx/cdn/shop/products/65.png?v=1689102255',
    reseñas: [5, 4, 4, 5],
  },
  {
    id: '2',
    nombre: 'Gorro adidas',
    precio: 19.99,
    imagen: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/71ab10bfa4ca4e9686dcafc901299242_9366/Gorro_Beanie_Adicolor_Cuff_UNISEX_Azul_IL4878_01_00_standard.jpg',
    reseñas: [3, 4, 5],
  },
  {
    id: '3',
    nombre: 'Tenis puma',
    precio: 49.99,
    imagen: 'https://s3-us-west-1.amazonaws.com/calzzapato/zoom/09HPY9-2.jpg',
    reseñas: [5, 5, 5, 4],
  },
  {
    id: '4',
    nombre: 'Tenis nike',
    precio: 59.49,
    imagen: 'https://tafmx.vtexassets.com/arquivos/ids/246795-800-1067?v=638792960021570000&width=800&height=1067&aspect=true',
    reseñas: [4, 4, 3],
  },
  {
    id: '5',
    nombre: 'Sudadera',
    precio: 39.49,
    imagen: 'https://www.accesoriosmexicali.com/cdn/shop/products/617txrl8JbL._AC_UL1500.jpg?v=1655236344',
    reseñas: [4, 4, 3],
  },
  {
    id: '6',
    nombre: 'Sudadera nsqk',
    precio: 100.49,
    imagen: 'https://shop.roy600.com/cdn/shop/files/MERCH_ATP_7.png?v=1732723284&width=533',
    reseñas: [5, 4, 5],
  },
  {
    id: '7',
    nombre: 'Tenis jordan',
    precio: 150.49,
    imagen: 'https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/c24fde97-21d2-4d84-85e1-337f3f9f92fe/WMNS+AIR+JORDAN+1+MID.png',
    reseñas: [4, 4, 3],
  },
  {
    id: '8',
    nombre: 'Chamarra',
    precio: 50.49,
    imagen: 'https://i.etsystatic.com/12960116/r/il/ac013d/2266128140/il_570xN.2266128140_ox0x.jpg',
    reseñas: [4, 4, 3],
  },
  {
    id: '9',
    nombre: 'Short nike',
    precio: 30.49,
    imagen: 'https://metasports.com.py/media/catalog/product/cache/9286ff1d9737d1c21559f7da6b69729b/nike/apparel/DD1887010-1.jpg',
    reseñas: [4, 4, 3],
  },
   {
    id: '10',
    nombre: 'Gorro adidas',
    precio: 20.49,
    imagen: 'https://unicosmoderna.com/cdn/shop/files/GORRO-ADIDAS-HL9322-UNISEX-INDIGO-184847-_1.jpg?v=1745882480',
    reseñas: [4, 4, 3],
  },
   {
    id: '11',
    nombre: 'Playera San Diego Padres',
    precio: 190.49,
    imagen: 'https://i5.walmartimages.com/asr/8a361fc4-dc99-45a3-b2b4-2e1628b72efb.121ba35421593ae859cfd4a7c320e067.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF',
    reseñas: [4, 4, 3],
  },
   {
    id: '12',
    nombre: 'Pants adidas',
    precio: 90.49,
    imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqCjdkLvzsMA2XaqA04O_j7l6vVRi7h0HvSw&s',
    reseñas: [4, 4, 3],
  },
   {
    id: '13',
    nombre: 'Gorra adidas',
    precio: 90.49,
    imagen: 'https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/a7adb615-98ec-4d11-ac40-052058b24f0c/U+NK+DF+CLUB+CAP+S+CB+P.png',
    reseñas: [4, 4, 3],
  },
   {
    id: '14',
    nombre: 'Tenis adidas',
    precio: 99.49,
    imagen: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTFV5yVazk4KZmvzAuD3qQbaaL86oFRVuqD6Ou7O7IbbBIURmZRTmzVvtvBAJb87AmaZOQZN7oK3aLw_2C1qtCtOra1Bud-vp0cELIARai4-auEQVd1a8yPPHFP-4TV5vrjpZMA_w&usqp=CAc',
    reseñas: [4, 4, 3],
  },
     {
    id: '15',
    nombre: 'Playera nsqk',
    precio: 60.49,
    imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRoUNry1mvreuA-URf0ziMXq1ZHnOisi8lQA&s',
    reseñas: [5, 5, 5],
  },
  ];

function HomeScreen({ navigation }) {
  const [carrito, setCarrito] = useState([]);
  const [busqueda, setBusqueda] = useState('');
  const [menuAbierto, setMenuAbierto] = useState(false);

  const agregarAlCarrito = (producto) => {
    setCarrito([...carrito, producto]);
    Alert.alert('✅ Producto agregado', `${producto.nombre} ha sido agregado al carrito.`);
  };

  const productosFiltrados = productos.filter((p) =>
    p.nombre.toLowerCase().includes(busqueda.toLowerCase())
  );

  const promedioEstrellas = (reseñas) => {
    const total = reseñas.reduce((sum, r) => sum + r, 0);
    return Math.round(total / reseñas.length);
  };

  return (
    <View style={[styles.container, { backgroundColor: '#f85117' }]}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => setMenuAbierto(!menuAbierto)}>
          <Text style={styles.menuIcon}>☰</Text>
        </TouchableOpacity>
        <Text style={styles.titulo}>Sports Legally</Text>
      </View>

      {/* Menú lateral */}
      {menuAbierto && (
        <View style={styles.menuLateral}>
          <View style={{ marginTop: 100 }}>
            <TouchableOpacity onPress={() => setMenuAbierto(false)}>
              <Text style={styles.menuItem}>Inicio</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {
              setMenuAbierto(false);
              navigation.navigate('Carrito', { carrito, setCarrito });
            }}>
              <Text style={styles.menuItem}>🛒 Ir al carrito</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setMenuAbierto(false)}>
              <Text style={styles.menuCerrar}>✖️ Cerrar menú</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}

      <ScrollView style={{ marginBottom: 60 }}>
        {/* Buscador */}
        <TextInput
          style={styles.input}
          placeholder="🔍 Buscar productos..."
          value={busqueda}
          onChangeText={setBusqueda}
          
        />

        {/* Productos destacados */}
        <Text style={styles.subtitulo}>🔥 Productos destacados</Text>
        <FlatList
          data={productos}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => navigation.navigate('Detalle', { producto: item, agregarAlCarrito })}
              style={styles.destacadoCard}
            >
              <Image source={{ uri: item.imagen }} style={styles.imagenDestacada} />
              <Text style={styles.nombre}>{item.nombre}</Text>
              <Text>💲 {item.precio.toFixed(2)}</Text>
              <View style={styles.estrellas}>
                {Array(promedioEstrellas(item.reseñas))
                  .fill()
                  .map((_, i) => (
                    <Text key={i}>⭐</Text>
                  ))}
              </View>
            </TouchableOpacity>
          )}
        />

        {/* Todos los productos */}
        <Text style={styles.subtitulo}>Todos los productos</Text>
        <FlatList
          data={productosFiltrados}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => navigation.navigate('Detalle', { producto: item, agregarAlCarrito })}
              style={styles.card}
            >
              <Image source={{ uri: item.imagen }} style={styles.imagen} />
              <Text style={styles.nombre}>{item.nombre}</Text>
              <Text>💲 {item.precio.toFixed(2)}</Text>
              <View style={styles.estrellas}>
                {Array(promedioEstrellas(item.reseñas))
                  .fill()
                  .map((_, i) => (
                    <Text key={i}>⭐</Text>
                  ))}
              </View>
            </TouchableOpacity>
          )}
        />
      </ScrollView>

      {/* Botón flotante carrito */}
      <View style={styles.botonFijo}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Carrito', { carrito, setCarrito })}
          style={styles.botonIrCarrito}
        >
          <Text style={styles.textoBoton}>🛒 Ver carrito ({carrito.length})</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

function CarritoScreen({ route, navigation }) {
  const { carrito, setCarrito } = route.params;

  const total = carrito.reduce((sum, item) => sum + item.precio, 0);

  const eliminarDelCarrito = (index) => {
    const nuevoCarrito = [...carrito];
    nuevoCarrito.splice(index, 1);
    setCarrito(nuevoCarrito);
    Alert.alert('🗑️ Producto eliminado');
  };

  return (
    <View style={[styles.container, { backgroundColor: '#1a6ae6' }]}>
      <Text style={styles.subtitulo}>🛒 Carrito</Text>
      <ScrollView style={{ marginBottom: 60 }}>
        {carrito.length === 0 ? (
          <Text style={{ textAlign: 'center' }}>El carrito está vacío.</Text>
        ) : (
          carrito.map((item, index) => (
            <View key={index} style={styles.card}>
              <Image source={{ uri: item.imagen }} style={styles.imagen} />
              <Text style={styles.nombre}>{item.nombre}</Text>
              <Text>💲 {item.precio.toFixed(2)}</Text>
              <TouchableOpacity
                onPress={() => eliminarDelCarrito(index)}
                style={[styles.botonAgregar, { backgroundColor: 'red' }]}
              >
                <Text style={{ color: 'white' }}>Eliminar</Text>
              </TouchableOpacity>
            </View>
          ))
        )}
        <View style={styles.carrito}>
          <Text>🧾 Artículos: {carrito.length}</Text>
          <Text>💰 Total: ${total.toFixed(2)}</Text>
        </View>
      </ScrollView>

      {/* Botón flotante Comprar */}
      <View style={styles.botonFijo}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Pago', { total })}
          style={[styles.botonIrCarrito, { backgroundColor: '#28a745' }]}
        >
          <Text style={styles.textoBoton}>💳 Comprar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

function PagoScreen({ route }) {
  const { total } = route.params;

  const confirmarPago = (metodo) => {
    Alert.alert('✅ Pago confirmado', `Has pagado $${total.toFixed(2)} con ${metodo}. ¡Gracias por tu compra!`);
  };

  return (
    <View style={[styles.container, { backgroundColor: '#f9f9f9 ' }]}>
      <Text style={styles.subtitulo}>💳 Opciones de pago</Text>
      <TouchableOpacity onPress={() => confirmarPago('Tarjeta de crédito')} style={styles.botonAgregar}>
        <Text style={{ color: '#fff' }}>Tarjeta de crédito</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => confirmarPago('PayPal')} style={styles.botonAgregar}>
        <Text style={{ color: '#fff' }}>PayPal</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => confirmarPago('Transferencia bancaria')} style={styles.botonAgregar}>
        <Text style={{ color: '#fff' }}>Transferencia bancaria</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => confirmarPago('Pago en Oxxo')} style={styles.botonAgregar}>
        <Text style={{ color: '#fff' }}>Pago en Oxxo</Text>
      </TouchableOpacity>
    </View>
  );
}

function DetalleProductoScreen({ route }) {
  const { producto, agregarAlCarrito } = route.params;

  const promedioEstrellas = (reseñas) => {
    const total = reseñas.reduce((sum, r) => sum + r, 0);
    return Math.round(total / reseñas.length);
  };

  return (
    <ScrollView style={[styles.container, { backgroundColor: '#1a6ae6' }]}>
      <Text style={styles.subtitulo}>{producto.nombre}</Text>
      <Image source={{ uri: producto.imagen }} style={styles.imagen} />
      <Text style={{ fontSize: 18, marginBottom: 10 }}>💲 {producto.precio.toFixed(2)}</Text>
      <Text style={{ marginBottom: 10 }}>Descripción: Este es un excelente producto de calidad premium que no te puedes perder.</Text>
      <Text style={styles.subtitulo}>⭐ Reseñas</Text>
      <View style={styles.estrellas}>
        {Array(promedioEstrellas(producto.reseñas))
          .fill()
          .map((_, i) => (
            <Text key={i}>⭐</Text>
          ))}
      </View>
      <View style={{ marginBottom: 20 }}>
        {producto.reseñas.map((r, index) => (
          <Text key={index}>⭐ {r} estrellas - ¡Muy buen producto!</Text>
        ))}
      </View>
      <TouchableOpacity
        onPress={() => agregarAlCarrito(producto)}
        style={[styles.botonAgregar, { backgroundColor: '#28a745' }]}
      >
        <Text style={{ color: '#fff' }}>🛒 Agregar al carrito</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Inicio" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Carrito" component={CarritoScreen} />
        <Stack.Screen name="Pago" component={PagoScreen} />
        <Stack.Screen name="Detalle" component={DetalleProductoScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
header: {
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  paddingTop: StatusBar.currentHeight || 40, 
  height: 60 + (StatusBar.currentHeight || 40),
  backgroundColor: '#f85117',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  paddingHorizontal: 10,
  elevation: 5,
  zIndex: 1000,
  color: '#f85117',
},
menuIcon: {
  fontSize: 28,
  position: '',
  left: -100,
},
titulo: {
  fontSize: 24,
  fontWeight: 'futura',
  
},
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    marginBottom: 10,
    borderRadius: 5,
    marginTop: 100,
  },
  card: {
    padding: 10,
    marginBottom: 10,
    backgroundColor: '#fff',
    borderRadius: 5,
    elevation: 2,
    color: '#0761ec',
  },
  imagen: {
    width: '100%',
    height: 200,
    marginBottom: 5,
  },
  imagenDestacada: {
    width: 120,
    height: 120,
    marginBottom: 5,
  },
  nombre: {
    fontWeight: 'futura',
  },
  botonAgregar: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 10,
  },
  subtitulo: {
    fontSize: 20,
    fontWeight: 'futura',
    marginBottom: 5,
    color: 'white',
  },
  carrito: {
    padding: 10,
    backgroundColor: '#eee',
    marginTop: 10,
  },
  botonFijo: {
    position: 'absolute',
    bottom: 10,
    left: 10,
    right: 10,
  },
  botonIrCarrito: {
    backgroundColor: '#007bff',
    padding: 15,
    borderRadius: 30,
    alignItems: 'center',
  },
  textoBoton: {
    color: '#fff',
    fontWeight: 'bold',
  },
  destacadoCard: {
    padding: 10,
    marginRight: 10,
    backgroundColor: '#1a6ae6',
    borderRadius: 5,
    elevation: 2,
    width: 140,
  },
  menuLateral: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: 200,
    height: '100%',
    backgroundColor: '#1f58dd',
    padding: 10,
    zIndex: 999,
    elevation: 5,
  },
  menuItem: {
    fontSize: 23,
    marginBottom: 10,
  },
  menuCerrar: {
    fontSize: 16,
    color: 'red',
  },
  estrellas: {
    flexDirection: 'row',
    marginVertical: 5,
  },
});
