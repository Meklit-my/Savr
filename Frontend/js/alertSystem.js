
const ALERT_DURATION_DEFAULT = 5000;     
const ALERT_DURATION_LONG = 8000;        

const ALERT_TYPES = {
  success: {
    className: 'alert-success',
    icon: '✓',
    title: 'Success'
  },
  error: {
    className: 'alert-error',
    icon: '✕',
    title: 'Error'
  },
  warning: {
    className: 'alert-warning',
    icon: '⚠',
    title: 'Warning'
  },
  info: {
    className: 'alert-info',
    icon: 'ℹ',
    title: 'Info'
  }
};


let alertContainer = null;
let currentTimeout = null;

function getAlertContainer() {
  if (!alertContainer) {
    alertContainer = document.querySelector('.alert-container') || 
                    document.querySelector('[data-alert-container]');

    if (!alertContainer) {
      alertContainer = document.createElement('div');
      alertContainer.className = 'alert-container';
      document.body.prepend(alertContainer);
    }
  }
  return alertContainer;
}

function createAlert(message, type = 'info', duration = ALERT_DURATION_DEFAULT) {

  hideAlert();

  const alert = document.createElement('div');
  alert.className = `alert-banner ${ALERT_TYPES[type]?.className || 'alert-info'}`;
  
  const icon = ALERT_TYPES[type]?.icon || 'ℹ';
  const title = ALERT_TYPES[type]?.title || 'Notification';

  alert.innerHTML = `
    <div class="alert-icon">${icon}</div>
    <div class="alert-content">
      <strong>${title}</strong>
      <p>${message}</p>
    </div>
    <button class="alert-close" aria-label="Close">×</button>
  `;

  getAlertContainer().appendChild(alert);

  if (duration > 0) {
    currentTimeout = setTimeout(() => {
      hideAlert();
    }, duration);
  }

  alert.querySelector('.alert-close').addEventListener('click', () => {
    hideAlert();
  });

  alert.addEventListener('click', (e) => {
    if (e.target !== alert.querySelector('.alert-close')) {
      hideAlert();
    }
  });

  return alert;
}
