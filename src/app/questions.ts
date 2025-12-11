// src/app/questions.ts

export interface Question {
  category: string;
  question: string;
  choices: string[];
  answer: number;
}

export const QUESTIONS: Question[] = [
  // ------------------ IT-IPT02 ------------------
  {
    category: 'IT-IPT02',
    question: 'What does Data Binding connect?',
    choices: [
      'CSS to HTML',
      'HTML to TypeScript',
      'Images to CSS',
      'HTML to JavaScript only',
    ],
    answer: 1,
  },
  {
    category: 'IT-IPT02',
    question: 'Which is used for One-Way Binding?',
    choices: ['{{ }}', '()', '[]', '[( )]'],
    answer: 0,
  },
  {
    category: 'IT-IPT02',
    question: 'Which binding is used when a user clicks a button?',
    choices: [
      'Property Binding',
      'Event Binding',
      'String Interpolation',
      'Two-Way Binding',
    ],
    answer: 1,
  },
  {
    category: 'IT-IPT02',
    question: 'What do you use for Two-Way Binding?',
    choices: ['{{ }}', '()', '[(ngModel)]', '[value]'],
    answer: 2,
  },
  {
    category: 'IT-IPT02',
    question:
      'What keyword is used inside methods to access a component’s property?',
    choices: ['here', 'self', 'this', 'class'],
    answer: 2,
  },
  {
    category: 'IT-IPT02',
    question: 'What is a Component in Angular?',
    choices: [
      'A CSS file',
      'A TypeScript class with HTML template',
      'A database table',
      'A JavaScript loop',
    ],
    answer: 1,
  },
  {
    category: 'IT-IPT02',
    question:
      'Which file usually contains the HTML template of a page in Ionic?',
    choices: [
      'home.page.ts',
      'home.page.css',
      'home.page.html',
      'home.page.json',
    ],
    answer: 2,
  },
  {
    category: 'IT-IPT02',
    question: 'Which decorator is used to define a Component in Angular?',
    choices: ['@Page', '@Module', '@Service', '@Component'],
    answer: 3,
  },
  {
    category: 'IT-IPT02',
    question:
      'What is the purpose of Ionic Components like <ion-button> or <ion-input>?',
    choices: [
      'To create mobile-friendly UI elements',
      'To run SQL queries',
      'To install packages',
      'To create animations only',
    ],
    answer: 0,
  },
  {
    category: 'IT-IPT02',
    question: 'Which command is used to create a new Ionic project?',
    choices: ['ionic start', 'ionic build', 'ionic open', 'ionic serve'],
    answer: 0,
  },

  // ------------------ IT-IAS01 ------------------
  {
    category: 'IT-IAS01',
    question: 'What is malware?',
    choices: [
      'A hardware component',
      'A harmless computer application',
      'Harmful software that damages or steals data',
      'A type of firewall',
    ],
    answer: 2,
  },
  {
    category: 'IT-IAS01',
    question:
      'Which malware spreads automatically across networks without needing user action?',
    choices: ['Virus', 'Worm', 'Trojan', 'Adware'],
    answer: 1,
  },
  {
    category: 'IT-IAS01',
    question: 'Which malware pretends to be a legitimate or useful program?',
    choices: ['Spyware', 'Trojan Horse', 'Ransomware', 'Worm'],
    answer: 1,
  },
  {
    category: 'IT-IAS01',
    question: 'What does ransomware do?',
    choices: [
      'Displays random ads',
      'Follows you into restricted areas',
      'Encrypts files and demands payment',
      'Monitors network ports',
    ],
    answer: 2,
  },
  {
    category: 'IT-IAS01',
    question: 'Which of the following is used to prevent malware infections?',
    choices: [
      'Installing unknown apps',
      'Turning off system updates',
      'Avoiding backups',
      'Installing antivirus and updating software',
    ],
    answer: 3,
  },
  {
    category: 'IT-IAS01',
    question: 'What is phishing?',
    choices: [
      'A physical break-in',
      'Using fake emails/messages to steal information',
      'Following someone into a building',
      'Offering a free USB as bait',
    ],
    answer: 1,
  },
  {
    category: 'IT-IAS01',
    question: 'Which social engineering attack targets a specific person?',
    choices: ['Phishing', 'Tailgating', 'Spear phishing', 'Pretexting'],
    answer: 2,
  },
  {
    category: 'IT-IAS01',
    question: 'What type of attack floods a server with too much traffic?',
    choices: ['SQL Injection', 'DDoS', 'Man-in-the-Middle', 'Brute Force'],
    answer: 1,
  },
  {
    category: 'IT-IAS01',
    question:
      'Which attack involves an attacker secretly intercepting communication?',
    choices: [
      'Zero-Day Attack',
      'Man-in-the-Middle',
      'Adware Attack',
      'Brute-Force Attack',
    ],
    answer: 1,
  },
  {
    category: 'IT-IAS01',
    question:
      'A hacker entering harmful commands into a website’s input field is an example of:',
    choices: ['Port scanning', 'SQL Injection', 'Ransomware', 'DDoS'],
    answer: 1,
  },

  // ------------------ IT-IMO1 ------------------
  {
    category: 'IT-IMO1',
    question: 'Which SQL keyword is used to retrieve data from a table?',
    choices: ['GET', 'SELECT', 'SHOW', 'FETCH'],
    answer: 1,
  },
  {
    category: 'IT-IMO1',
    question: 'Which clause is used to filter rows in SQL?',
    choices: ['ORDER BY', 'GROUP BY', 'WHERE', 'HAVING'],
    answer: 2,
  },
  {
    category: 'IT-IMO1',
    question: 'Which SQL statement is used to sort the result?',
    choices: ['ORDER BY', 'SORT BY', 'ALIGN', 'GROUP'],
    answer: 0,
  },
  {
    category: 'IT-IMO1',
    question: 'What does the DISTINCT keyword do?',
    choices: [
      'Renames columns',
      'Removes duplicate rows',
      'Combines tables',
      'Deletes data',
    ],
    answer: 1,
  },
  {
    category: 'IT-IMO1',
    question: 'Which operator is used to combine conditions in a WHERE clause?',
    choices: ['BETWEEN', 'LIKE', 'AND / OR', 'LIMIT'],
    answer: 2,
  },
  {
    category: 'IT-IMO1',
    question: 'What is the main difference between UNION and UNION ALL?',
    choices: [
      'UNION ALL removes duplicates',
      'UNION removes duplicates',
      'They are exactly the same',
      'UNION ALL sorts the data',
    ],
    answer: 1,
  },
  {
    category: 'IT-IMO1',
    question:
      'Which set operator returns only the rows that appear in both results?',
    choices: ['UNION', 'EXCEPT', 'INTERSECT', 'JOIN'],
    answer: 2,
  },
  {
    category: 'IT-IMO1',
    question:
      'Which set operator returns rows from the first query that are not in the second?',
    choices: ['UNION', 'INTERSECT', 'EXCEPT', 'MERGE'],
    answer: 2,
  },
  {
    category: 'IT-IMO1',
    question:
      'To combine two result sets using a set operator, what must they have?',
    choices: [
      'The same table name',
      'The same column count and compatible data types',
      'The same primary key',
      'The same number of rows',
    ],
    answer: 1,
  },
  {
    category: 'IT-IMO1',
    question:
      'If two queries contain ORDER BY, where should it be placed when using set operations?',
    choices: [
      'After each SELECT',
      'Only in the first SELECT',
      'Only at the very end',
      'Anywhere',
    ],
    answer: 2,
  },

  // ------------------ IT-IPT01 ------------------
  {
    category: 'IT-IPT01',
    question: 'What type of language is Python?',
    choices: [
      'Low-level language',
      'High-level language',
      'Machine language',
      'Binary language',
    ],
    answer: 1,
  },
  {
    category: 'IT-IPT01',
    question: 'Who created Python?',
    choices: [
      'James Gosling',
      'Dennis Ritchie',
      'Guido van Rossum',
      'Bill Gates',
    ],
    answer: 2,
  },
  {
    category: 'IT-IPT01',
    question: 'What is the file extension for Python files?',
    choices: ['.java', '.py', '.exe', '.html'],
    answer: 1,
  },
  {
    category: 'IT-IPT01',
    question: 'Python is known for being…',
    choices: [
      'Difficult to read',
      'Complicated and slow',
      'Simple and easy to understand',
      'Only for web development',
    ],
    answer: 2,
  },
  {
    category: 'IT-IPT01',
    question: 'Python is mainly used for which of the following?',
    choices: [
      'Game development',
      'Web development',
      'Data science',
      'All of the above',
    ],
    answer: 3,
  },
  {
    category: 'IT-IPT01',
    question: 'Which company currently manages Python?',
    choices: ['Meta', 'Python Software Foundation', 'Microsoft', 'Oracle'],
    answer: 1,
  },
  {
    category: 'IT-IPT01',
    question: 'Python supports which type of programming paradigm?',
    choices: [
      'Object-oriented',
      'Procedural',
      'Functional',
      'All of the above',
    ],
    answer: 3,
  },
  {
    category: 'IT-IPT01',
    question: 'What is the name of the program that runs Python code?',
    choices: ['Compiler', 'Translator', 'Interpreter', 'Renderer'],
    answer: 2,
  },
  {
    category: 'IT-IPT01',
    question: 'Which symbol is commonly used for comments in Python?',
    choices: ['//', '#', '<!-- -->', '/* */'],
    answer: 1,
  },
  {
    category: 'IT-IPT01',
    question: 'Python was first released in what year?',
    choices: ['1989', '1991', '1995', '2000'],
    answer: 1,
  },

  // ------------------ IT-SA01 ------------------
  {
    category: 'IT-SA01',
    question: 'Which platform is an example of a cloud service?',
    choices: ['VMware', 'AWS', 'Docker', 'Hyper-V'],
    answer: 1,
  },
  {
    category: 'IT-SA01',
    question: 'Virtual machines are created using:',
    choices: ['Docker', 'VMware', 'Ansible', 'GitHub'],
    answer: 1,
  },
  {
    category: 'IT-SA01',
    question: 'Containerization uses:',
    choices: ['Hyper-V', 'Docker', 'Azure', 'Jenkins'],
    answer: 1,
  },
  {
    category: 'IT-SA01',
    question: 'Which is a benefit of cloud computing?',
    choices: [
      'Requires more hardware',
      'Fixed capacity',
      'Scalability',
      'No internet needed',
    ],
    answer: 2,
  },
  {
    category: 'IT-SA01',
    question: 'DevOps focuses on:',
    choices: [
      'Slowing down releases',
      'Manual updates',
      'Collaboration and automation',
      'Removing testing',
    ],
    answer: 2,
  },
  {
    category: 'IT-SA01',
    question: 'Which tool automates configuration?',
    choices: ['Ansible', 'VirtualBox', 'Kubernetes', 'Git'],
    answer: 0,
  },
  {
    category: 'IT-SA01',
    question: 'Which model mixes on-premise and cloud?',
    choices: ['Traditional', 'Cloud', 'Hybrid', 'DevOps'],
    answer: 2,
  },
  {
    category: 'IT-SA01',
    question: 'Zero Trust means:',
    choices: [
      'All users are trusted',
      'No verification needed',
      'Always verify',
      'No authentication required',
    ],
    answer: 2,
  },
  {
    category: 'IT-SA01',
    question: 'Which is a container orchestrator?',
    choices: ['Ansible', 'Jenkins', 'Kubernetes', 'Hyper-V'],
    answer: 2,
  },
  {
    category: 'IT-SA01',
    question: 'CI/CD belongs to:',
    choices: ['DevOps', 'Virtualization', 'On-Premise', 'Traditional Model'],
    answer: 0,
  },
];
