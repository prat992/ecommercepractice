import Swal from 'sweetalert2';

export class ToastNotificationService {
  static showToast(productName: string, action: 'added' | 'removed') {
    const title = action === 'added' ? 'Added to Cart' : 'Removed from Cart';
    const text = action === 'added' 
      ? `${productName} has been added to your cart.` 
      : `${productName} has been removed from your cart.`;

    Swal.fire({
      icon: 'success',
      title: title,
      text: text,
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
    });
  }
}
