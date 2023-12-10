const fetchUsers = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/orders', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await response.json();
      return data.data;
    } catch (error) {
      console.error('Error fetching users:', error);
      return [];
    }
  };
  
  document.addEventListener('DOMContentLoaded', () => {
    const renderOrders = async () => {
    const orders = await fetchUsers();
    const orderTableBody = document.querySelector('#orderTableBody');
    
    // 기존 데이터 삭제
    orderTableBody.innerHTML = '';

    // 사용자 데이터를 동적으로 추가
    orders.forEach((order) => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${order.Id}</td>
        <td>${order.OrderAt}</td>
        <td>${order.StoreId}</td>
        <td>${order.UserId}</td>
      `;
      orderTableBody.appendChild(row);
      });
    };
  
    // 페이지 로드 시 사용자 데이터를 받아와서 HTML에 추가
    renderOrders();
  });
  