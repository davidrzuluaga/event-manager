const information = {
  title: 'Live Event Analytics',
  subtitle: 'Ipsum Event 2020',
  user: {
    name: 'Nombre de usuario',
    description: 'Lorem ipsum dolor sit amet.'
  },
  snacks: [
    {
      content: [{ main: '12.043', subtitle: 'Registered attendees' }],
      color: 'darkmagenta'
    },
    {
      content: [
        { main: '6.320', subtitle: 'Attendees online' },
        { main: '56%', subtitle: 'Attendance' }
      ],
      color: 'lightseagreen'
    }
  ],
  activities: [
    {
      timerange: { start: '12:00 AM', end: '2:00 PM' },
      title: 'MAKE THE LEAP TO TEACH LEAD',
      subtitle: 'Ryan Cromwell',
      attendees: 800,
      progress: 80,
      image: 'image/Ryan_Cromwell.png',
      comments: [
        {
          type: 'reaction',
          name: 'Nombre de usuario',
          self: true,
          message: '😉',
          time: new Date()
        },
        {
          type: 'message',
          name: 'Nombre de usuario',
          message:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nulla aliquet enim tortor at auctor urna. Cursus vitae congue mauris rhoncus aenean.',
          self: true,
          time: new Date()
        },
        {
          type: 'message',
          name: 'Nombre de usuario',
          message:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nulla aliquet enim tortor at auctor urna. Cursus vitae congue mauris rhoncus aenean.',
          self: false,
          time: new Date()
        },
        {
          type: 'reaction',
          name: 'Nombre de usuario',
          self: true,
          message: '🙏',
          time: new Date()
        },
        {
          type: 'message',
          name: 'Nombre de usuario',
          message:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nulla aliquet enim tortor at auctor urna. Cursus vitae congue mauris rhoncus aenean.',
          self: false,
          time: new Date()
        }
      ]
    },
    {
      timerange: { start: '12:00 AM', end: '2:00 PM' },
      title: 'Name of the activity',
      subtitle: 'Evelyn J. Fields | CEO of Stay Green',
      image: 'image/Ryan_Cromwell.png',
      attendees: 800,
      progress: 30,
      comments: [
        {
          type: 'message',
          name: 'Nombre de usuario',
          message:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nulla aliquet enim tortor at auctor urna. Cursus vitae congue mauris rhoncus aenean.',
          self: true,
          time: new Date()
        }
      ]
    },
    {
      timerange: { start: '12:00 AM', end: '2:00 PM' },
      title: 'Name of the activity',
      subtitle: 'Evelyn J. Fields | CEO of Stay Green',
      attendees: 800,
      image: 'image/Ryan_Cromwell.png',
      progress: 50,
      comments: [
        {
          type: 'message',
          name: 'Nombre de usuario',
          message:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nulla aliquet enim tortor at auctor urna. Cursus vitae congue mauris rhoncus aenean.',
          self: false,
          time: new Date()
        }
      ]
    }
  ],
  meetings: [
    {
      owner: 'Juan Pablo Castillo',
      status: 'waiting',
      attendee: {
        subtitle: 'CEO of Stay Green',
        name: 'Ryan Cromwell',
        image: 'image/Marius_Ciocirlan.png'
      }
    },
    {
      owner: 'Juan David Castillo',
      status: 'ended',
      attendee: {
        subtitle: 'CEO of Stay Green',
        name: 'Ryan Cromwell',
        image: 'image/Marius_Ciocirlan.png'
      }
    },
    {
      owner: 'Juan Castillo',
      status: 'progress',
      attendee: {
        subtitle: 'CEO of Stay Green',
        name: 'Ryan Cromwell',
        image: 'image/Marius_Ciocirlan.png'
      }
    },
    {
      owner: 'Juan Alejandro Castillo',
      status: 'waiting',
      attendee: {
        subtitle: 'CEO of Stay Green',
        name: 'Ryan Cromwell',
        image: 'image/Marius_Ciocirlan.png'
      }
    }
  ]
};

export default information;
