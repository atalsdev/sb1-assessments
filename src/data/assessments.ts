import { Assessment } from '../types';

export const assessments: Assessment[] = [
  {
    id: 'anxiety',
    title: 'Anxiety Disorder Assessment',
    description: 'Evaluate symptoms related to generalized anxiety, panic attacks, and social anxiety.',
    timeToComplete: '5-7 minutes',
    icon: 'Brain',
    disclaimer: 'This screening tool is not intended to provide a diagnosis. It is for informational purposes only and should not substitute professional medical advice.',
    questions: [
      {
        id: 'a1',
        text: 'How often do you feel nervous, anxious, or on edge?',
        options: [
          { value: 0, label: 'Not at all' },
          { value: 1, label: 'Several days' },
          { value: 2, label: 'More than half the days' },
          { value: 3, label: 'Nearly every day' }
        ]
      },
      {
        id: 'a2',
        text: 'How often do you have trouble relaxing?',
        options: [
          { value: 0, label: 'Not at all' },
          { value: 1, label: 'Several days' },
          { value: 2, label: 'More than half the days' },
          { value: 3, label: 'Nearly every day' }
        ]
      }
    ]
  },
  {
    id: 'depression',
    title: 'Depression Screening',
    description: 'Assess symptoms of depression including mood, energy levels, and daily functioning.',
    timeToComplete: '6-8 minutes',
    icon: 'Heart',
    disclaimer: 'This screening is not a diagnostic tool. Please consult a mental health professional for proper evaluation.',
    questions: [
      {
        id: 'd1',
        text: 'Over the last 2 weeks, how often have you felt little interest or pleasure in doing things?',
        options: [
          { value: 0, label: 'Not at all' },
          { value: 1, label: 'Several days' },
          { value: 2, label: 'More than half the days' },
          { value: 3, label: 'Nearly every day' }
        ]
      },
      {
        id: 'd2',
        text: 'How often have you felt down, depressed, or hopeless?',
        options: [
          { value: 0, label: 'Not at all' },
          { value: 1, label: 'Several days' },
          { value: 2, label: 'More than half the days' },
          { value: 3, label: 'Nearly every day' }
        ]
      }
    ]
  },
  {
    id: 'asd',
    title: 'Autism Spectrum Assessment',
    description: 'Evaluate traits associated with autism spectrum, including social interaction and sensory sensitivities.',
    timeToComplete: '10-12 minutes',
    icon: 'Puzzle',
    disclaimer: 'This assessment helps identify autism spectrum traits but is not a diagnostic tool.',
    questions: [
      {
        id: 'asd1',
        text: 'How comfortable are you with making eye contact during conversations?',
        options: [
          { value: 0, label: 'Very comfortable' },
          { value: 1, label: 'Somewhat comfortable' },
          { value: 2, label: 'Somewhat uncomfortable' },
          { value: 3, label: 'Very uncomfortable' }
        ]
      }
    ]
  },
  {
    id: 'bipolar',
    title: 'Bipolar Disorder Screening',
    description: 'Screen for symptoms of bipolar disorder, including manic and depressive episodes.',
    timeToComplete: '8-10 minutes',
    icon: 'Activity',
    disclaimer: 'This screening tool helps identify bipolar symptoms but requires professional diagnosis.',
    questions: [
      {
        id: 'b1',
        text: 'Have you experienced periods of elevated mood with increased energy and decreased need for sleep?',
        options: [
          { value: 0, label: 'Never' },
          { value: 1, label: 'Rarely' },
          { value: 2, label: 'Sometimes' },
          { value: 3, label: 'Often' }
        ]
      }
    ]
  },
  {
    id: 'ocd',
    title: 'OCD Assessment',
    description: 'Evaluate obsessive thoughts and compulsive behaviors.',
    timeToComplete: '7-9 minutes',
    icon: 'Scale',
    disclaimer: 'This assessment helps identify OCD symptoms but requires professional diagnosis.',
    questions: [
      {
        id: 'o1',
        text: 'How often do you experience unwanted, intrusive thoughts that cause anxiety?',
        options: [
          { value: 0, label: 'Never' },
          { value: 1, label: 'Occasionally' },
          { value: 2, label: 'Frequently' },
          { value: 3, label: 'Constantly' }
        ]
      }
    ]
  },
  {
    id: 'add',
    title: 'Adult ADD/ADHD Screening',
    description: 'Assess attention deficit symptoms in adults.',
    timeToComplete: '8-10 minutes',
    icon: 'Zap',
    disclaimer: 'This screening helps identify ADD/ADHD symptoms but requires professional evaluation.',
    questions: [
      {
        id: 'add1',
        text: 'How often do you have difficulty sustaining attention in tasks?',
        options: [
          { value: 0, label: 'Never' },
          { value: 1, label: 'Rarely' },
          { value: 2, label: 'Sometimes' },
          { value: 3, label: 'Very Often' }
        ]
      }
    ]
  },
  {
    id: 'ptsd',
    title: 'PTSD Screening',
    description: 'Evaluate symptoms related to post-traumatic stress disorder.',
    timeToComplete: '6-8 minutes',
    icon: 'Brain',
    disclaimer: 'This screening helps identify PTSD symptoms but requires professional evaluation.',
    questions: [
      {
        id: 'p1',
        text: 'In the past month, how often have you had nightmares about a traumatic experience?',
        options: [
          { value: 0, label: 'Not at all' },
          { value: 1, label: 'Several days' },
          { value: 2, label: 'More than half the days' },
          { value: 3, label: 'Nearly every day' }
        ]
      }
    ]
  },
  {
    id: 'eating',
    title: 'Eating Disorder Assessment',
    description: 'Screen for symptoms of various eating disorders.',
    timeToComplete: '7-9 minutes',
    icon: 'Scale',
    disclaimer: 'This screening helps identify eating disorder symptoms but requires professional diagnosis.',
    questions: [
      {
        id: 'e1',
        text: 'How often do you feel out of control while eating?',
        options: [
          { value: 0, label: 'Never' },
          { value: 1, label: 'Occasionally' },
          { value: 2, label: 'Often' },
          { value: 3, label: 'Very Often' }
        ]
      }
    ]
  },
  {
    id: 'sleep',
    title: 'Sleep Disorder Screening',
    description: 'Assess quality of sleep and potential sleep disorders.',
    timeToComplete: '5-7 minutes',
    icon: 'Moon',
    disclaimer: 'This screening helps identify sleep issues but requires professional evaluation.',
    questions: [
      {
        id: 's1',
        text: 'How often do you have trouble falling asleep?',
        options: [
          { value: 0, label: 'Never' },
          { value: 1, label: 'Sometimes' },
          { value: 2, label: 'Often' },
          { value: 3, label: 'Almost Always' }
        ]
      }
    ]
  },
  {
    id: 'burnout',
    title: 'Burnout Assessment',
    description: 'Evaluate symptoms of workplace burnout and chronic stress.',
    timeToComplete: '6-8 minutes',
    icon: 'Flame',
    disclaimer: 'This assessment helps identify burnout symptoms but is not diagnostic.',
    questions: [
      {
        id: 'bu1',
        text: 'How often do you feel emotionally drained from your work?',
        options: [
          { value: 0, label: 'Never' },
          { value: 1, label: 'A few times a year' },
          { value: 2, label: 'A few times a month' },
          { value: 3, label: 'Several times a week' }
        ]
      }
    ]
  },
  {
    id: 'personality',
    title: 'Personality Disorder Screening',
    description: 'Screen for traits associated with various personality disorders.',
    timeToComplete: '10-12 minutes',
    icon: 'Users',
    disclaimer: 'This screening helps identify personality disorder traits but requires professional diagnosis.',
    questions: [
      {
        id: 'pd1',
        text: 'How often do you experience intense and unstable relationships?',
        options: [
          { value: 0, label: 'Never' },
          { value: 1, label: 'Rarely' },
          { value: 2, label: 'Sometimes' },
          { value: 3, label: 'Often' }
        ]
      }
    ]
  },
  {
    id: 'substance',
    title: 'Substance Use Assessment',
    description: 'Evaluate patterns of substance use and potential dependencies.',
    timeToComplete: '7-9 minutes',
    icon: 'Activity',
    disclaimer: 'This screening helps identify substance use patterns but requires professional evaluation.',
    questions: [
      {
        id: 'su1',
        text: 'How often do you find yourself using more of a substance than you initially intended?',
        options: [
          { value: 0, label: 'Never' },
          { value: 1, label: 'Rarely' },
          { value: 2, label: 'Sometimes' },
          { value: 3, label: 'Often' }
        ]
      }
    ]
  },
  {
    id: 'phobia',
    title: 'Phobia Assessment',
    description: 'Evaluate specific phobias and their impact on daily life.',
    timeToComplete: '6-8 minutes',
    icon: 'Brain',
    disclaimer: 'This assessment helps identify phobic responses but requires professional evaluation.',
    questions: [
      {
        id: 'ph1',
        text: 'How often do specific fears interfere with your daily activities?',
        options: [
          { value: 0, label: 'Never' },
          { value: 1, label: 'Rarely' },
          { value: 2, label: 'Sometimes' },
          { value: 3, label: 'Often' }
        ]
      }
    ]
  },
  {
    id: 'adhd-support',
    title: 'ADHD Support Assessment',
    description: 'For partners and parents supporting someone with ADHD.',
    timeToComplete: '8-10 minutes',
    icon: 'Heart',
    disclaimer: 'This assessment helps identify support strategies but is not diagnostic.',
    questions: [
      {
        id: 'as1',
        text: 'How often do you feel overwhelmed by your supporting role?',
        options: [
          { value: 0, label: 'Never' },
          { value: 1, label: 'Rarely' },
          { value: 2, label: 'Sometimes' },
          { value: 3, label: 'Often' }
        ]
      }
    ]
  }
];