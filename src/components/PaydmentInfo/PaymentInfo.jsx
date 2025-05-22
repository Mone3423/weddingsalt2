import './PaymentInfo.css';

export default function PaymentInfo() {
  return (
    <div className="payment-card fade-in">
      <div className="payment-header">PAYMENT METHOD</div>
      <div className="payment-split">
        <div className="split-box">
          <div className="amount">50%</div>
          <div className="label">Reserva</div>
        </div>
        <div className="divider" />
        <div className="split-box">
          <div className="amount">50%</div>
          <div className="label">Day of the Event</div>
        </div>
      </div>

      <div className="divider-line" />

      <div className="delivery">
        <div className="delivery-title">DELIVERY TIME</div>
        <div className="delivery-days">40</div>
        <div className="delivery-label">Days</div>
      </div>
    </div>
  );
}
