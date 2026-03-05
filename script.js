// Lista de fotos subidas
const photos = [
    '6028311351463185452.webp',
    '6030563151276871111.webp',
    '6030563151276871136.webp',
    '6030563151276871137.webp',
    '6034830678026816673.webp',
    '6034830678026816676.webp',
    '6037082477840501949.webp',
    '6037354628443213039.webp',
    '6037354628443213041.webp',
    '6037354628443213042.webp',
    '6037354628443213048.webp',
    '6039606428256898217.webp',
    '6039606428256898218.webp',
    '6039606428256898219.webp',
    '6039606428256898239.webp',
    '6041707680876924039.webp',
    '6041707680876924040.webp',
    '6041707680876924190.webp',
    '6041707680876924434.webp',
    '6041707680876924435.webp',
    '6041707680876924438.webp',
    '6041707680876924439.webp',
    '6041707680876924440.webp',
    '6041707680876924474.webp',
    '6041707680876924479.webp',
    '6041707680876924481.webp',
    '6041707680876924482.webp',
    '6041707680876924491.webp',
    '6046211280504294634.webp',
    '6046211280504294642.webp',
    'GOPR0008.webp',
    'GOPR0009.webp',
    'GOPR0010.webp',
    'GOPR0024.webp',
    'GOPR0032.webp',
    'GOPR0033.webp',
    'GOPR0034.webp',
    'GOPR0035.webp',
    'GOPR0050.webp',
    'GOPR0051.webp',
    'GOPR0078.webp',
    'GOPR0079.webp',
    'GOPR0082.webp',
    'GOPR0083.webp',
    'GOPR0084.webp',
    'GOPR0085.webp',
    'GOPR0096.webp',
    'GOPR0097.webp',
    'GOPR0105.webp',
    'GOPR0297.webp',
    'GOPR0300.webp',
    'GOPR0325.webp',
    'GOPR0326.webp',
    'GOPR0327.webp',
    'GOPR0328.webp',
    'GOPR0329.webp',
    'GOPR0331.webp',
    'GOPR0334.webp',
    'GOPR0335.webp',
    'GOPR9271.webp',
    'GOPR9492.webp',
    'GOPR9496.webp',
    'GOPR9503.webp',
    'GOPR9510.webp',
    'GOPR9541.webp',
    'GOPR9552.webp',
    'GOPR9553.webp',
    'GOPR9555.webp',
    'GOPR9557.webp',
    'GOPR9560.webp',
    'GOPR9573.webp',
    'GOPR9575.webp',
    'GOPR9576.webp',
    'GOPR9577.webp',
    'GOPR9578.webp',
    'GOPR9579.webp',
    'GOPR9580.webp',
    'GOPR9581.webp',
    'GOPR9584.webp',
    'GOPR9596.webp',
    'GOPR9598.webp',
    'GOPR9602.webp',
    'GOPR9615.webp',
    'GOPR9616.webp',
    'GOPR9618.webp',
    'GOPR9619.webp',
    'GOPR9622.webp',
    'GOPR9623.webp',
    'GOPR9624.webp',
    'GOPR9630.webp',
    'GOPR9633.webp',
    'GOPR9636.webp',
    'GOPR9638.webp',
    'GOPR9640.webp',
    'GOPR9645.webp',
    'GOPR9646.webp',
    'GOPR9648.webp',
    'GOPR9649.webp',
    'GOPR9659.webp',
    'GOPR9661.webp',
    'GOPR9662.webp',
    'GOPR9664.webp',
    'GOPR9668.webp',
    'GOPR9669.webp',
    'GOPR9670.webp',
    'GOPR9676.webp',
    'GOPR9683.webp',
    'GOPR9694.webp',
    'GOPR9695.webp',
    'GOPR9696.webp',
    'GOPR9697.webp',
    'GOPR9699.webp',
    'GOPR9700.webp',
    'GOPR9711.webp',
    'GOPR9712.webp',
    'GOPR9714.webp',
    'GOPR9716.webp',
    'GOPR9724.webp',
    'GOPR9725.webp',
    'GOPR9726.webp',
    'GOPR9734.webp',
    'GOPR9735.webp',
    'GOPR9736.webp',
    'GOPR9737.webp',
    'GOPR9747.webp',
    'GOPR9748.webp',
    'GOPR9751.webp',
    'GOPR9757.webp',
    'GOPR9758.webp',
    'GOPR9759.webp',
    'GOPR9760.webp',
    'GOPR9767.webp',
    'GOPR9777.webp',
    'GOPR9778.webp',
    'GOPR9794.webp',
    'GOPR9797.webp',
    'GOPR9798.webp',
    'GOPR9802.webp',
    'GOPR9822.webp',
    'GOPR9823.webp',
    'GOPR9824.webp',
    'GOPR9825.webp',
    'GOPR9826.webp',
    'GOPR9832.webp',
    'GOPR9834.webp',
    'GOPR9840.webp',
    'GOPR9843.webp',
    'GOPR9844.webp',
    'GOPR9845.webp',
    'GOPR9847.webp',
    'GOPR9871.webp',
    'GOPR9872.webp',
    'GOPR9874.webp',
    'GOPR9879.webp',
    'GOPR9881.webp',
    'GOPR9892.webp',
    'GOPR9893.webp',
    'GOPR9904.webp',
    'GOPR9905.webp',
    'GOPR9907.webp',
    'GOPR9908.webp',
    'GOPR9910.webp',
    'GOPR9912.webp',
    'GOPR9920.webp',
    'GOPR9922.webp',
    'GOPR9930.webp',
    'GOPR9946.webp',
    'GOPR9955.webp',
    'GOPR9956.webp',
    'GOPR9959.webp',
    'GOPR9963.webp',
    'GOPR9970.webp',
    'P1250207.webp',
    'P1250208.webp',
    'P1250335.webp',
    'P1250336.webp',
    'P1250337.webp',
    'P1250338.webp',
    'P1250341.webp',
    'P1250342.webp',
    'P1250346.webp',
    'P1250347.webp',
    'P1250348.webp',
    'P1250349.webp',
    'P1250350.webp',
    'P1250351.webp',
    'P1250352.webp',
    'P1250353.webp',
    'P1250354.webp',
    'P1250355.webp',
    'P1250356.webp',
    'P1250357.webp',
    'P1250358.webp',
    'P1250359.webp',
    'P1250360.webp',
    'P1250361.webp',
    'P1250362.webp',
    'P1250363.webp',
    'P1250364.webp',
    'P1250365.webp',
    'P1250366.webp',
    'P1250367.webp',
    'P1260022.webp',
    'P1260023.webp',
    'P1260024.webp',
    'P1260025.webp',
    'P1260053.webp',
    'P1260118.webp',
    'P1260119.webp',
    'P1260120.webp',
    'P1260121.webp',
    'P1260122.webp',
    'P1260123.webp',
    'P1260124.webp',
    'P1260125.webp',
    'P1260126.webp',
    'P1260127.webp',
    'P1260128.webp',
    'P1260129.webp',
    'P1270021.webp',
    'P1270029.webp',
    'P1270030.webp',
    'P1270035.webp',
    'P1270036.webp',
    'P1270134.webp',
    'P1270136.webp',
    'P1270137.webp',
    'P1270138.webp',
    'P1270139.webp',
    'P1270140.webp',
    'P1270141.webp',
    'P1270142.webp',
    'P1270143.webp',
    'P1270144.webp',
    'P1270146.webp',
    'P1270148.webp',
    'P1280161.webp',
    'P1280162.webp',
    'P1280163.webp',
    'P1280164.webp',
    'P1280165.webp',
    'P1280166.webp',
    'P1280203.webp',
    'P1280208.webp',
    'P1280209.webp',
    'P1280210.webp',
    'P1280211.webp',
    'P1280212.webp',
    'P1280213.webp',
    'P1280214.webp',
    'P1280215.webp',
    'P1280216.webp',
    'P1280217.webp',
    'P1290347.webp',
    'P1300348.webp',
    'P1300349.webp',
    'P1300350.webp',
    'P1300351.webp',
    'P1300352.webp',
    'P1300354.webp',
    'P1300431.webp',
    'P1300432.webp',
    'P1300433.webp',
    'P1300434.webp',
    'P1300435.webp',
    'P1300436.webp',
    'P1300437.webp',
    'P1300438.webp',
    'P1300440.webp',
    'P1300452.webp',
    'P1300453.webp',
    'P1300454.webp',
    'P1300455.webp',
    'P1300530.webp',
    'P1300531.webp',
    'P1300532.webp',
    'P1300533.webp',
    'P1300534.webp',
    'P1300535.webp',
    'P1300536.webp',
    'P1300537.webp',
    'P1300538.webp',
    'P1300539.webp',
    'P1300540.webp',
    'P1300541.webp',
    'P1300571.webp',
    'P1300574.webp',
    'P1300575.webp',
    'P1300576.webp',
    'P1300577.webp',
    'P1310482.webp',
    'P1310521.webp',
    'P1310522.webp',
    'P1310523.webp',
    'P1310524.webp',
    'P1310525.webp',
    'P1310526.webp',
    'P1310527.webp',
    'P1310528.webp',
    'P1310529.webp',
    'P1310530.webp',
    'P1310531.webp',
    'P1310532.webp',
    'P1310533.webp',
    'P1310534.webp',
    'P1310535.webp',
    'P1310536.webp',
    'P1310537.webp',
    'P1310538.webp',
    'P1310539.webp',
    'P1310540.webp',
    'P1310541.webp',
    'P1310542.webp',
    'P1310543.webp',
    'P1310544.webp',
    'P1310589.webp',
    'P1310591.webp',
    'P1310593.webp',
    'P2030003.webp',
    'P2030004.webp',
    'P2030042.webp',
    'P2030043.webp',
    'P2030044.webp',
    'P2030045.webp',
    'P2030046.webp',
    'P2030047.webp',
    'P2030048.webp',
    'P2030049.webp',
    'P2030050.webp',
    'P2030051.webp',
    'P2030052.webp',
    'P2030053.webp',
    'P2030055.webp',
    'P2030060.webp',
    'P2030061.webp',
    'P2030062.webp',
    'P2030063.webp',
    'P2030064.webp',
    'P2030065.webp',
    'P2030068.webp',
    'tortugas.webp'
];

// CONFIGURACIÓN DE FIREBASE
// ⚠️ IMPORTANTE: Reemplaza los valores con los de tu proyecto Firebase
 const firebaseConfig = {
    apiKey: "AIzaSyD62_VZjNjRZtr3AT0SnOlBV-Z4E4qV1Cw",
    authDomain: "fotos-seychelles-nuestras.firebaseapp.com",
    projectId: "fotos-seychelles-nuestras",
    storageBucket: "fotos-seychelles-nuestras.firebasestorage.app",
    messagingSenderId: "156119586041",
    appId: "1:156119586041:web:d74a44e2815f7ba6453e28"
  };

// Inicializar Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

let currentPhotoIndex = -1;

// Elementos del DOM
const gallery = document.getElementById('gallery');
const modal = document.getElementById('modal');
const modalImage = document.getElementById('modalImage');
const photoName = document.getElementById('photoName');
const commentInput = document.getElementById('commentInput');
const addCommentBtn = document.getElementById('addCommentBtn');
const commentsList = document.getElementById('commentsList');
const closeBtn = document.querySelector('.close');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const photoCounter = document.getElementById('photoCounter');

// Inicializar galería
function initGallery() {
    console.log('Inicializando galería con', photos.length, 'fotos');
    
    photos.forEach((photo, index) => {
        const item = document.createElement('div');
        item.className = 'gallery-item';
        item.innerHTML = `
            <img src="./images/${photo}" alt="${photo}" loading="lazy" onerror="handleImageError(this, '${photo}')">
            <div class="gallery-item-overlay">
                <span class="overlay-icon">🔍</span>
            </div>
        `;
        
        item.addEventListener('click', () => openPhoto(index));
        gallery.appendChild(item);
    });
    
    console.log('Galería inicializada');
}

// Abrir foto en modal
async function openPhoto(index) {
    currentPhotoIndex = index;
    const photo = photos[index];
    
    modalImage.src = `./images/${photo}`;
    modalImage.onerror = () => handleImageError(modalImage, photo);
    photoName.textContent = photo;
    
    // Actualizar contador
    photoCounter.textContent = `${index + 1} / ${photos.length}`;
    
    // Cargar comentarios
    await loadComments();
    
    // Actualizar botones de navegación
    prevBtn.disabled = index === 0;
    nextBtn.disabled = index === photos.length - 1;
    
    // Mostrar modal
    modal.classList.add('active');
    
    // Limpiar input
    commentInput.value = '';
}

// Cargar comentarios desde Firebase
async function loadComments() {
    const photo = photos[currentPhotoIndex];
    commentsList.innerHTML = '<p class="no-comments">Cargando comentarios...</p>';
    
    try {
        const querySnapshot = await db.collection('comments')
            .where('photo', '==', photo)
            .orderBy('date', 'desc')
            .get();
        
        commentsList.innerHTML = '';
        
        if (querySnapshot.empty) {
            commentsList.innerHTML = '<p class="no-comments">Sin comentarios aún. ¡Sé el primero en comentar!</p>';
        } else {
            querySnapshot.forEach(doc => {
                const comment = doc.data();
                const commentDiv = document.createElement('div');
                commentDiv.className = 'comment';
                const date = new Date(comment.date.toDate ? comment.date.toDate() : comment.date);
                commentDiv.innerHTML = `
                    <p class="comment-text">${escapeHtml(comment.text)}</p>
                    <p class="comment-time">${date.toLocaleString('es-ES')}</p>
                `;
                commentsList.appendChild(commentDiv);
            });
        }
    } catch (error) {
        console.error('Error cargando comentarios:', error);
        commentsList.innerHTML = '<p class="no-comments" style="color: #e74c3c;">Error al cargar comentarios. ¿Firebase está configurado?</p>';
    }
}

// Guardar comentario en Firebase
async function saveComment() {
    const text = commentInput.value.trim();
    
    if (text === '') {
        alert('Por favor, escribe un comentario');
        return;
    }
    
    const photo = photos[currentPhotoIndex];
    
    try {
        await db.collection('comments').add({
            photo: photo,
            text: text,
            date: new Date()
        });
        
        // Limpiar input y recargar comentarios
        commentInput.value = '';
        await loadComments();
    } catch (error) {
        console.error('Error guardando comentario:', error);
        alert('Error al guardar el comentario. ¿Firebase está configurado?');
    }
}

// Función para manejar errores de carga de imágenes
function handleImageError(img, photoName) {
    console.warn('Intentando ruta alternativa para:', photoName);
    
    // Intentar con ruta absoluta desde la raíz
    if (img.src.includes('./images/')) {
        img.src = `/images/${photoName}`;
    } else if (img.src.includes('/images/')) {
        img.src = `images/${photoName}`;
    } else {
        console.error('No se pudo cargar la imagen:', photoName);
        // Mostrar un placeholder o mensaje de error
        img.style.display = 'none';
        const errorMsg = document.createElement('div');
        errorMsg.textContent = 'Imagen no disponible';
        errorMsg.style.cssText = 'color: red; padding: 20px; text-align: center; background: #f8f8f8; border: 1px solid #ddd;';
        img.parentNode.appendChild(errorMsg);
    }
}

// Cerrar modal
function closeModal() {
    modal.classList.remove('active');
    currentPhotoIndex = -1;
}

// Navegación
function showPrevious() {
    if (currentPhotoIndex > 0) {
        openPhoto(currentPhotoIndex - 1);
    }
}

function showNext() {
    if (currentPhotoIndex < photos.length - 1) {
        openPhoto(currentPhotoIndex + 1);
    }
}

// Event listeners
closeBtn.addEventListener('click', closeModal);
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeModal();
    }
});

addCommentBtn.addEventListener('click', saveComment);
commentInput.addEventListener('keydown', (e) => {
    if (e.ctrlKey && e.key === 'Enter') {
        saveComment();
    }
});

prevBtn.addEventListener('click', showPrevious);
nextBtn.addEventListener('click', showNext);

// Atajos de teclado
document.addEventListener('keydown', (e) => {
    if (modal.classList.contains('active')) {
        if (e.key === 'ArrowLeft') showPrevious();
        if (e.key === 'ArrowRight') showNext();
        if (e.key === 'Escape') closeModal();
    }
});

// Función de diagnóstico para imágenes
function diagnoseImages() {
    console.log('=== DIAGNÓSTICO DE IMÁGENES ===');
    console.log('Ubicación actual:', window.location.href);
    console.log('Directorio base:', window.location.pathname);
    
    // Probar diferentes rutas
    const testPaths = [
        './images/GOPR0008.webp',
        'images/GOPR0008.webp',
        '/images/GOPR0008.webp',
        '../images/GOPR0008.webp'
    ];
    
    testPaths.forEach(path => {
        const img = new Image();
        img.onload = () => console.log('✅ Ruta funciona:', path);
        img.onerror = () => console.log('❌ Ruta falla:', path);
        img.src = path;
    });
}

// Ejecutar diagnóstico
diagnoseImages();

// Inicializar galería
initGallery();
