const fetchUsers = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/orderitems', {
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
    const renderOrderItems = async () => {
    const orderitems = await fetchUsers();
    const orderItemTableBody = document.querySelector('#orderItemTableBody');

    // 기존 데이터 삭제
    orderItemTableBody.innerHTML = '';

    // 사용자 데이터를 동적으로 추가
    orderitems.forEach((orderitem) => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${orderitem.Id}</td>
        <td>${orderitem.OrderId}</td>
        <td>${orderitem.ItemId}</td>
      `;
      orderItemTableBody.appendChild(row);
      });
    };
  
    // 페이지 로드 시 사용자 데이터를 받아와서 HTML에 추가
    renderOrderItems();
  });
  