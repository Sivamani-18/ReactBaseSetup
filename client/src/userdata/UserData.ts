interface IRecentresponses {
    [index: number]: {
      form_heading: string;
      email_or_status: string;
      form_name: string;
      submitted_on: string;
    };
  }
  
  export const Recentresponses: IRecentresponses = [
    {
      form_heading: 'Jace Summers',
      email_or_status: 'jace@nhs.uk',
      form_name: 'COVID-19 test form',
      submitted_on: '24th Nov 2021',
    },
    {
      form_heading: 'Joseff Elliott',
      email_or_status: 'joseff@nhs.uk',
      form_name: 'My survey',
      submitted_on: '23rd Nov 2021',
    },
  ];
  
  interface IRecentapprovals {
    [index: number]: {
      form_heading: string;
      approval_status: boolean;
      approval_content: string;
      submitted_on: string;
    };
  }
  
  export const Recentapprovals: IRecentapprovals = [
    {
      form_heading: 'Tobacco Assessment Question',
      approval_status: false,
      approval_content: 'Sent for approval',
      submitted_on: '31st Dec 2021',
    },
    {
      form_heading: 'My survey',
      approval_status: true,
      approval_content: 'Approved',
      submitted_on: '31st Dec 2021',
    },
  ];