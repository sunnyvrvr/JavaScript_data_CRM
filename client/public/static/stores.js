const fetchUsers = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/stores', {
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
    const renderStores = async () => {
      const stores = await fetchUsers();
      const userTableBody = document.querySelector('#storeTableBody');
  
      // 기존 데이터 삭제
      storeTableBody.innerHTML = '';
  
      // 사용자 데이터를 동적으로 추가
      stores.forEach((store) => {
        const row = document.createElement('tr');
        row.innerHTML = `
          <td>${store.Id}</td>
          <td>${store.Name}</td>
          <td>${store.Type}</td>
        `;
        storeTableBody.appendChild(row);
      });
    };
  
    // 페이지 로드 시 사용자 데이터를 받아와서 HTML에 추가
    renderStores();
  });
  