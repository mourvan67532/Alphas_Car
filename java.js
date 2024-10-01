document.getElementById('appointment-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const car = document.getElementById('car').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;

    const appointmentsContainer = document.getElementById('appointments-container');
    
    const appointmentDiv = document.createElement('div');
    appointmentDiv.classList.add('appointment');
    appointmentDiv.textContent = Agendamento de ${name} (${car}) em ${date} às ${time}.;
    
    appointmentsContainer.appendChild(appointmentDiv);
    
    const confirmation = document.getElementById('confirmation');
    confirmation.textContent = Agendamento confirmado para ${name}.;
    confirmation.classList.remove('hidden');

    this.reset(); // Limpa o formulário
});