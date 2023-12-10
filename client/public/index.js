const fetchUsers = async () => {
  try {
    const response = await fetch('http://localhost:3000/api/users', {
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
  const renderUsers = async () => {
    const users = await fetchUsers();
    const userTableBody = document.querySelector('#userTableBody');

    // 기존 데이터 삭제
    userTableBody.innerHTML = '';

    // 사용자 데이터를 동적으로 추가
    users.forEach((user) => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${user.Id}</td>
        <td>${user.Name}</td>
        <td>${user.Birthdate}</td>
        <td>${user.Gender}</td>
        <td>${user.Address}</td>
      `;
      userTableBody.appendChild(row);
    });
  };

  // 페이지 로드 시 사용자 데이터를 받아와서 HTML에 추가
  renderUsers();
});
