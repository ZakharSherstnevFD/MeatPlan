import Vue from "vue";
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    woman: [
      {
        id: 1,
        visibility: true,
        imageMain: require('@/assets/img/woman1.jpg'),
        icon: require('@/assets/img/w1_icon.png'),
        step: '1/18',
        title: 'What is your primary goal?',
        width: 'width: 5%;',
        answer:
          [
            {
              answerTitle: 'Lose weight',
              answerText: 'Start torching calories and melting fat',
              active: 'answerRightActive1',
              iconAnswer: require('@/assets/img/icon_answer.png'),
            },
            {
              answerTitle: 'Get pumped',
              answerText: 'Strong, toned, and healthy body',
              active: 'answerRightActive2',
              iconAnswer: require('@/assets/img/icon_answer.png'),
            },
            {
              answerTitle: 'Develop healthy habits',
              answerText: 'Say no to food cravings',
              active: 'answerRightActive3',
              iconAnswer: require('@/assets/img/icon_answer.png'),
            },
          ],
      },
      {
        id: 2,
        visibility: false,
        imageMain: require('@/assets/img/woman2.jpg'),
        icon: require('@/assets/img/w2_icon.png'),
        step: '2/18',
        title: 'What is your current body type?',
        width: 'width: 10%;',
        answer:
        [
          {
            answerTitle: 'Rectangle',
            answerText: null,
            active: 'answerRightActive1',
            iconAnswer: require('@/assets/img/icon_answer.png'),
          },
          {
            answerTitle: 'Hourglass',
            answerText: null,
            active: 'answerRightActive2',
            iconAnswer: require('@/assets/img/icon_answer.png'),
          },
          {
            answerTitle: 'Pear',
            answerText: null,
            active: 'answerRightActive3',
            iconAnswer: require('@/assets/img/icon_answer.png'),
          },
          {
            answerTitle: 'Round',
            answerText: null,
            active: 'answerRightActive4',
            iconAnswer: require('@/assets/img/icon_answer.png'),
          },
        ],
      },
      {
        id: 3,
        visibility: false,
        imageMain: require('@/assets/img/woman3.jpg'),
        icon: require('@/assets/img/w3_icon.png'),
        step: '3/18',
        title: 'Please describe your typical day',
        width: 'width: 15%;',
        answer:
          [
            {
              answerTitle: 'At the office',
              answerText: null,
              active: 'answerRightActive1',
              iconAnswer: require('@/assets/img/icon_answer.png'),
            },
            {
              answerTitle: 'Daily long walks',
              answerText: null,
              active: 'answerRightActive2',
              iconAnswer: require('@/assets/img/icon_answer.png'),
            },
            {
              answerTitle: 'Physical work',
              answerText: null,
              active: 'answerRightActive3',
              iconAnswer: require('@/assets/img/icon_answer.png'),
            },
            {
              answerTitle: 'Mostly at home',
              answerText: null,
              active: 'answerRightActive4',
              iconAnswer: require('@/assets/img/icon_answer.png'),
            },
          ],
      },
      {
        id: 4,
        visibility: false,
        imageMain: require('@/assets/img/woman4.jpg'),
        icon: require('@/assets/img/w4_icon.png'),
        step: '4/18',
        title: 'How long has it been since you were at your ideal weight?',
        width: 'width: 20%;',
        answer:
          [
            {
              answerTitle: 'Less than 1 year',
              answerText: null,
              active: 'answerRightActive1',
              iconAnswer: require('@/assets/img/icon_answer.png'),
            },
            {
              answerTitle: '1-2 years',
              answerText: null,
              active: 'answerRightActive2',
              iconAnswer: require('@/assets/img/icon_answer.png'),
            },
            {
              answerTitle: 'More than 3 years',
              answerText: null,
              active: 'answerRightActive3',
              iconAnswer: require('@/assets/img/icon_answer.png'),
            },
            {
              answerTitle: 'Never',
              answerText: null,
              active: 'answerRightActive4',
              iconAnswer: require('@/assets/img/icon_answer.png'),
            },
          ],
      },
      {
        id: 5,
        visibility: false,
        imageMain: require('@/assets/img/woman5.jpg'),
        icon: require('@/assets/img/w5_icon.png'),
        step: '5/18',
        title: 'Are you able to maintain your energy during the day?',
        width: 'width: 25%;',
        answer:
          [
            {
              answerTitle: 'My energy levels do not fluctuate',
              answerText: null,
              active: 'answerRightActive1',
              iconAnswer: require('@/assets/img/icon_answer.png'),
            },
            {
              answerTitle: 'I drag before meals',
              answerText: null,
              active: 'answerRightActive2',
              iconAnswer: require('@/assets/img/icon_answer.png'),
            },
            {
              answerTitle: 'I feel sleepy after lunch',
              answerText: null,
              active: 'answerRightActive3',
              iconAnswer: require('@/assets/img/icon_answer.png'),
            },
          ],
      },
      {
        id: 6,
        visibility: false,
        imageMain: require('@/assets/img/woman6.jpg'),
        icon: require('@/assets/img/w6_icon.png'),
        step: '6/18',
        title: 'How much do you sleep per night?',
        width: 'width: 30%;',
        answer:
          [
            {
              answerTitle: 'Less than 5 hours',
              answerText: null,
              active: 'answerRightActive1',
              iconAnswer: require('@/assets/img/icon_answer.png'),
            },
            {
              answerTitle: '5-6 hours',
              answerText: null,
              active: 'answerRightActive2',
              iconAnswer: require('@/assets/img/icon_answer.png'),
            },
            {
              answerTitle: '7-8 hours',
              answerText: null,
              active: 'answerRightActive3',
              iconAnswer: require('@/assets/img/icon_answer.png'),
            },
            {
              answerTitle: 'More than 8 hours',
              answerText: null,
              active: 'answerRightActive4',
              iconAnswer: require('@/assets/img/icon_answer.png'),
            },
          ],
      },
      {
        id: 7,
        visibility: false,
        imageMain: require('@/assets/img/woman7.jpg'),
        icon: require('@/assets/img/w7_icon.png'),
        step: '7/18',
        title: 'How much water do you drink daily?',
        width: 'width: 35%;',
        answer:
          [
            {
              answerTitle: 'Only coffee, tea, or soda',
              answerText: null,
              active: 'answerRightActive1',
              iconAnswer: require('@/assets/img/icon_answer.png'),
            },
            {
              answerTitle: 'Less than 2 glasses (16 oz)',
              answerText: null,
              active: 'answerRightActive2',
              iconAnswer: require('@/assets/img/icon_answer.png'),
            },
            {
              answerTitle: '2-6 glasses (16-48 oz)',
              answerText: null,
              active: 'answerRightActive3',
              iconAnswer: require('@/assets/img/icon_answer.png'),
            },
            {
              answerTitle: 'More than 6 glasses',
              answerText: null,
              active: 'answerRightActive4',
              iconAnswer: require('@/assets/img/icon_answer.png'),
            },
          ],
      },
      {
        id: 8,
        visibility: false,
        imageMain: require('@/assets/img/woman8.jpg'),
        icon: require('@/assets/img/w8_icon.png'),
        step: '8/18',
        title: 'Do you often require external motivation to keep going?',
        width: 'width: 40%;',
        answer:
          [
            {
              answerTitle: 'Yes',
              answerText: null,
              active: 'answerRightActive1',
              iconAnswer: require('@/assets/img/icon_answer.png'),
            },
            {
              answerTitle: 'No',
              answerText: null,
              active: 'answerRightActive2',
              iconAnswer: require('@/assets/img/icon_answer.png'),
            },
          ],
      },
      {
        id: 9,
        visibility: false,
        imageMain: require('@/assets/img/woman9.jpg'),
        icon: require('@/assets/img/w9_icon.png'),
        step: '9/18',
        title: 'Are you afraid you won\'t have time for other things because of exercising and planning meals?',
        width: 'width: 45%;',
        answer:
          [
            {
              answerTitle: 'Yes',
              answerText: null,
              active: 'answerRightActive1',
              iconAnswer: require('@/assets/img/icon_answer.png'),
            },
            {
              answerTitle: 'No',
              answerText: null,
              active: 'answerRightActive2',
              iconAnswer: require('@/assets/img/icon_answer.png'),
            },
          ],
      },

    ],
    womanTest: [
      {
        id: 1,
        visibility: true,
        imageMain: require('@/assets/img/woman10.jpg'),
        icon: require('@/assets/img/w10_icon.png'),
        step: '10/18',
        title: 'Which bad habits do you have?',
        width: 'width: 50%;',
        answer:
          [
            {
              answerTitle: 'I eat late at night',
              answerText: null,
              active: 'answerRightActive1',
              iconAnswer: require('@/assets/img/icon_answer.png'),
              iconAnswerTest: require('@/assets/img/icon_answer_test.png'),
            },
            {
              answerTitle: 'I don’t get enough sleep',
              answerText: null,
              active: 'answerRightActive2',
              iconAnswer: require('@/assets/img/icon_answer.png'),
              iconAnswerTest: require('@/assets/img/icon_answer_test.png'),
            },
            {
              answerTitle: 'I can’t give up sweets',
              answerText: null,
              active: 'answerRightActive3',
              iconAnswer: require('@/assets/img/icon_answer.png'),
              iconAnswerTest: require('@/assets/img/icon_answer_test.png'),
            },
            {
              answerTitle: 'I love soft drinks',
              answerText: null,
              active: 'answerRightActive3',
              iconAnswer: require('@/assets/img/icon_answer.png'),
              iconAnswerTest: require('@/assets/img/icon_answer_test.png'),
            },
            {
              answerTitle: 'I consume a lot of salt',
              answerText: null,
              active: 'answerRightActive3',
              iconAnswer: require('@/assets/img/icon_answer.png'),
              iconAnswerTest: require('@/assets/img/icon_answer_test.png'),
            },
            {
              answerTitle: 'None of the above',
              answerText: null,
              active: 'answerRightActive3',
              iconAnswer: require('@/assets/img/icon_answer.png'),
              iconAnswerTest: require('@/assets/img/icon_answer_test.png'),
            },
          ],
      },
      {
        id: 2,
        visibility: false,
        imageMain: require('@/assets/img/woman11.jpg'),
        icon: require('@/assets/img/w11_icon.png'),
        step: '11/18',
        title: 'Select veggies you want to include in your meal plan',
        width: 'width: 55%;',
        answer:
          [
            {
              answerTitle: 'Broccoli',
              answerText: null,
              active: 'answerRightActive1',
              iconAnswer: require('@/assets/img/icon_answer.png'),
              iconAnswerTest: require('@/assets/img/icon_answer_test.png'),
            },
            {
              answerTitle: 'Sweet potato',
              answerText: null,
              active: 'answerRightActive2',
              iconAnswer: require('@/assets/img/icon_answer.png'),
              iconAnswerTest: require('@/assets/img/icon_answer_test.png'),
            },
            {
              answerTitle: 'Mushrooms',
              answerText: null,
              active: 'answerRightActive3',
              iconAnswer: require('@/assets/img/icon_answer.png'),
              iconAnswerTest: require('@/assets/img/icon_answer_test.png'),
            },
            {
              answerTitle: 'Tomatoes',
              answerText: null,
              active: 'answerRightActive3',
              iconAnswer: require('@/assets/img/icon_answer.png'),
              iconAnswerTest: require('@/assets/img/icon_answer_test.png'),
            },
            {
              answerTitle: 'Spinach',
              answerText: null,
              active: 'answerRightActive3',
              iconAnswer: require('@/assets/img/icon_answer.png'),
              iconAnswerTest: require('@/assets/img/icon_answer_test.png'),
            },
            {
              answerTitle: 'Zucchini',
              answerText: null,
              active: 'answerRightActive3',
              iconAnswer: require('@/assets/img/icon_answer.png'),
              iconAnswerTest: require('@/assets/img/icon_answer_test.png'),
            },
            {
              answerTitle: 'Pepper',
              answerText: null,
              active: 'answerRightActive3',
              iconAnswer: require('@/assets/img/icon_answer.png'),
              iconAnswerTest: require('@/assets/img/icon_answer_test.png'),
            },
          ],
      },
      {
        id: 3,
        visibility: false,
        imageMain: require('@/assets/img/woman12.jpg'),
        icon: require('@/assets/img/w12_icon.png'),
        step: '12/18',
        title: 'Select items you want to include in your meal plan',
        width: 'width: 60%;',
        answer:
          [
            {
              answerTitle: 'Avocado',
              answerText: null,
              active: 'answerRightActive1',
              iconAnswer: require('@/assets/img/icon_answer.png'),
              iconAnswerTest: require('@/assets/img/icon_answer_test.png'),
            },
            {
              answerTitle: 'Eggs',
              answerText: null,
              active: 'answerRightActive2',
              iconAnswer: require('@/assets/img/icon_answer.png'),
              iconAnswerTest: require('@/assets/img/icon_answer_test.png'),
            },
            {
              answerTitle: 'Yogurt',
              answerText: null,
              active: 'answerRightActive3',
              iconAnswer: require('@/assets/img/icon_answer.png'),
              iconAnswerTest: require('@/assets/img/icon_answer_test.png'),
            },
            {
              answerTitle: 'Tofu',
              answerText: null,
              active: 'answerRightActive3',
              iconAnswer: require('@/assets/img/icon_answer.png'),
              iconAnswerTest: require('@/assets/img/icon_answer_test.png'),
            },
            {
              answerTitle: 'Olives',
              answerText: null,
              active: 'answerRightActive3',
              iconAnswer: require('@/assets/img/icon_answer.png'),
              iconAnswerTest: require('@/assets/img/icon_answer_test.png'),
            },
            {
              answerTitle: 'Peanut butter nuts',
              answerText: null,
              active: 'answerRightActive3',
              iconAnswer: require('@/assets/img/icon_answer.png'),
              iconAnswerTest: require('@/assets/img/icon_answer_test.png'),
            },
            {
              answerTitle: 'Milk',
              answerText: null,
              active: 'answerRightActive3',
              iconAnswer: require('@/assets/img/icon_answer.png'),
              iconAnswerTest: require('@/assets/img/icon_answer_test.png'),
            },
          ],
      },
      {
        id: 4,
        visibility: false,
        imageMain: require('@/assets/img/woman13.jpg'),
        icon: require('@/assets/img/w13_icon.png'),
        step: '13/18',
        title: 'Select meats you want to include in your meal plan',
        width: 'width: 65%;',
        answer:
          [
            {
              answerTitle: 'Turkey',
              answerText: null,
              active: 'answerRightActive1',
              iconAnswer: require('@/assets/img/icon_answer.png'),
              iconAnswerTest: require('@/assets/img/icon_answer_test.png'),
            },
            {
              answerTitle: 'Fish',
              answerText: null,
              active: 'answerRightActive2',
              iconAnswer: require('@/assets/img/icon_answer.png'),
              iconAnswerTest: require('@/assets/img/icon_answer_test.png'),
            },
            {
              answerTitle: 'Beef',
              answerText: null,
              active: 'answerRightActive3',
              iconAnswer: require('@/assets/img/icon_answer.png'),
              iconAnswerTest: require('@/assets/img/icon_answer_test.png'),
            },
            {
              answerTitle: 'Chicken',
              answerText: null,
              active: 'answerRightActive3',
              iconAnswer: require('@/assets/img/icon_answer.png'),
              iconAnswerTest: require('@/assets/img/icon_answer_test.png'),
            },
            {
              answerTitle: 'Pork',
              answerText: null,
              active: 'answerRightActive3',
              iconAnswer: require('@/assets/img/icon_answer.png'),
              iconAnswerTest: require('@/assets/img/icon_answer_test.png'),
            },
            {
              answerTitle: 'None',
              answerText: null,
              active: 'answerRightActive3',
              iconAnswer: require('@/assets/img/icon_answer.png'),
              iconAnswerTest: require('@/assets/img/icon_answer_test.png'),
            },
          ],
      },
    ],
    womanAnswer: [
      {
        id: 1,
        visibility: true,
        imageMain: require('@/assets/img/woman14.jpg'),
        icon: require('@/assets/img/w14_icon.png'),
        step: '14/18',
        title: 'How old are you?',
        placeholder: 'years',
        textTitle:'We ask your age to personalize your plan',
        textParagraph: 'Older people are found to have a higher body fat percentage than younger people with the same BMI.',
        width: 'width: 75%;',
      },
      {
        id: 2,
        visibility: false,
        imageMain: require('@/assets/img/woman15.jpg'),
        icon: require('@/assets/img/w15_icon.png'),
        step: '15/18',
        title: 'Whats your height?',
        placeholder: 'cm',
        textTitle:'Calculating your BMI',
        width: 'width: 85%;',
        textParagraph: 'Body mass index (BMI) is a metric of body fat percentage commonly used to estimate risk levels of potential health problems.'
      },
      {
        id: 3,
        visibility: false,
        imageMain: require('@/assets/img/woman16.jpg'),
        icon: require('@/assets/img/w16_icon.png'),
        step: '16/18',
        title: 'Ok, what’s your current weight?',
        placeholder: 'kg',
        textTitle:null,
        textParagraph: null,
        width: 'width: 95%;',
      },
      {
        id: 4,
        visibility: false,
        imageMain: require('@/assets/img/woman17.jpg'),
        icon: require('@/assets/img/w17_icon.png'),
        step: '17/18',
        title: 'Ok, what’s your current weight?',
        placeholder: 'kg',
        params: [],
        textTitle:null,
        textParagraph: null,
        width: 'width: 100%;',
      },
    ],

    // MAN /////////////////////////////////////////
    man: [
      {
        id: 1,
        visibility: true,
        imageMain: require('@/assets/img/man1.jpg'),
        icon: require('@/assets/img/w1_icon.png'),
        step: '1/18',
        title: 'What is your primary goal?',
        width: 'width: 5%;',
        answer:
          [
            {
              answerTitle: 'Lose weight',
              answerText: 'Start torching calories and melting fat',
              active: 'answerRightActive1',
              iconAnswer: require('@/assets/img/icon_answer.png'),
            },
            {
              answerTitle: 'Get pumped',
              answerText: 'Strong, toned, and healthy body',
              active: 'answerRightActive2',
              iconAnswer: require('@/assets/img/icon_answer.png'),
            },
            {
              answerTitle: 'Develop healthy habits',
              answerText: 'Say no to food cravings',
              active: 'answerRightActive3',
              iconAnswer: require('@/assets/img/icon_answer.png'),
            },
          ],
      },
      {
        id: 2,
        visibility: false,
        imageMain: require('@/assets/img/man2.jpg'),
        icon: require('@/assets/img/w2_icon.png'),
        step: '2/18',
        title: 'What is your current body type?',
        width: 'width: 10%;',
        answer:
          [
            {
              answerTitle: 'Rectangle',
              answerText: null,
              active: 'answerRightActive1',
              iconAnswer: require('@/assets/img/icon_answer.png'),
            },
            {
              answerTitle: 'Hourglass',
              answerText: null,
              active: 'answerRightActive2',
              iconAnswer: require('@/assets/img/icon_answer.png'),
            },
            {
              answerTitle: 'Pear',
              answerText: null,
              active: 'answerRightActive3',
              iconAnswer: require('@/assets/img/icon_answer.png'),
            },
            {
              answerTitle: 'Round',
              answerText: null,
              active: 'answerRightActive4',
              iconAnswer: require('@/assets/img/icon_answer.png'),
            },
          ],
      },
      {
        id: 3,
        visibility: false,
        imageMain: require('@/assets/img/man3.jpg'),
        icon: require('@/assets/img/w3_icon.png'),
        step: '3/18',
        title: 'Please describe your typical day',
        width: 'width: 15%;',
        answer:
          [
            {
              answerTitle: 'At the office',
              answerText: null,
              active: 'answerRightActive1',
              iconAnswer: require('@/assets/img/icon_answer.png'),
            },
            {
              answerTitle: 'Daily long walks',
              answerText: null,
              active: 'answerRightActive2',
              iconAnswer: require('@/assets/img/icon_answer.png'),
            },
            {
              answerTitle: 'Physical work',
              answerText: null,
              active: 'answerRightActive3',
              iconAnswer: require('@/assets/img/icon_answer.png'),
            },
            {
              answerTitle: 'Mostly at home',
              answerText: null,
              active: 'answerRightActive4',
              iconAnswer: require('@/assets/img/icon_answer.png'),
            },
          ],
      },
      {
        id: 4,
        visibility: false,
        imageMain: require('@/assets/img/man4.jpg'),
        icon: require('@/assets/img/w4_icon.png'),
        step: '4/18',
        title: 'How long has it been since you were at your ideal weight?',
        width: 'width: 20%;',
        answer:
          [
            {
              answerTitle: 'Less than 1 year',
              answerText: null,
              active: 'answerRightActive1',
              iconAnswer: require('@/assets/img/icon_answer.png'),
            },
            {
              answerTitle: '1-2 years',
              answerText: null,
              active: 'answerRightActive2',
              iconAnswer: require('@/assets/img/icon_answer.png'),
            },
            {
              answerTitle: 'More than 3 years',
              answerText: null,
              active: 'answerRightActive3',
              iconAnswer: require('@/assets/img/icon_answer.png'),
            },
            {
              answerTitle: 'Never',
              answerText: null,
              active: 'answerRightActive4',
              iconAnswer: require('@/assets/img/icon_answer.png'),
            },
          ],
      },
      {
        id: 5,
        visibility: false,
        imageMain: require('@/assets/img/man5.jpg'),
        icon: require('@/assets/img/w5_icon.png'),
        step: '5/18',
        title: 'Are you able to maintain your energy during the day?',
        width: 'width: 25%;',
        answer:
          [
            {
              answerTitle: 'My energy levels do not fluctuate',
              answerText: null,
              active: 'answerRightActive1',
              iconAnswer: require('@/assets/img/icon_answer.png'),
            },
            {
              answerTitle: 'I drag before meals',
              answerText: null,
              active: 'answerRightActive2',
              iconAnswer: require('@/assets/img/icon_answer.png'),
            },
            {
              answerTitle: 'I feel sleepy after lunch',
              answerText: null,
              active: 'answerRightActive3',
              iconAnswer: require('@/assets/img/icon_answer.png'),
            },
          ],
      },
      {
        id: 6,
        visibility: false,
        imageMain: require('@/assets/img/man6.jpg'),
        icon: require('@/assets/img/w6_icon.png'),
        step: '6/18',
        title: 'How much do you sleep per night?',
        width: 'width: 30%;',
        answer:
          [
            {
              answerTitle: 'Less than 5 hours',
              answerText: null,
              active: 'answerRightActive1',
              iconAnswer: require('@/assets/img/icon_answer.png'),
            },
            {
              answerTitle: '5-6 hours',
              answerText: null,
              active: 'answerRightActive2',
              iconAnswer: require('@/assets/img/icon_answer.png'),
            },
            {
              answerTitle: '7-8 hours',
              answerText: null,
              active: 'answerRightActive3',
              iconAnswer: require('@/assets/img/icon_answer.png'),
            },
            {
              answerTitle: 'More than 8 hours',
              answerText: null,
              active: 'answerRightActive4',
              iconAnswer: require('@/assets/img/icon_answer.png'),
            },
          ],
      },
      {
        id: 7,
        visibility: false,
        imageMain: require('@/assets/img/man7.jpg'),
        icon: require('@/assets/img/w7_icon.png'),
        step: '7/18',
        title: 'How much water do you drink daily?',
        width: 'width: 35%;',
        answer:
          [
            {
              answerTitle: 'Only coffee, tea, or soda',
              answerText: null,
              active: 'answerRightActive1',
              iconAnswer: require('@/assets/img/icon_answer.png'),
            },
            {
              answerTitle: 'Less than 2 glasses (16 oz)',
              answerText: null,
              active: 'answerRightActive2',
              iconAnswer: require('@/assets/img/icon_answer.png'),
            },
            {
              answerTitle: '2-6 glasses (16-48 oz)',
              answerText: null,
              active: 'answerRightActive3',
              iconAnswer: require('@/assets/img/icon_answer.png'),
            },
            {
              answerTitle: 'More than 6 glasses',
              answerText: null,
              active: 'answerRightActive4',
              iconAnswer: require('@/assets/img/icon_answer.png'),
            },
          ],
      },
      {
        id: 8,
        visibility: false,
        imageMain: require('@/assets/img/man8.jpg'),
        icon: require('@/assets/img/w8_icon.png'),
        step: '8/18',
        title: 'Do you often require external motivation to keep going?',
        width: 'width: 40%;',
        answer:
          [
            {
              answerTitle: 'Yes',
              answerText: null,
              active: 'answerRightActive1',
              iconAnswer: require('@/assets/img/icon_answer.png'),
            },
            {
              answerTitle: 'No',
              answerText: null,
              active: 'answerRightActive2',
              iconAnswer: require('@/assets/img/icon_answer.png'),
            },
          ],
      },
      {
        id: 9,
        visibility: false,
        imageMain: require('@/assets/img/man9.jpg'),
        icon: require('@/assets/img/w9_icon.png'),
        step: '9/18',
        title: 'Are you afraid you won\'t have time for other things because of exercising and planning meals?',
        width: 'width: 45%;',
        answer:
          [
            {
              answerTitle: 'Yes',
              answerText: null,
              active: 'answerRightActive1',
              iconAnswer: require('@/assets/img/icon_answer.png'),
            },
            {
              answerTitle: 'No',
              answerText: null,
              active: 'answerRightActive2',
              iconAnswer: require('@/assets/img/icon_answer.png'),
            },
          ],
      },

    ],
    manTest: [
      {
        id: 1,
        visibility: true,
        imageMain: require('@/assets/img/man10.jpg'),
        icon: require('@/assets/img/w10_icon.png'),
        step: '10/18',
        title: 'Which bad habits do you have?',
        width: 'width: 50%;',
        answer:
          [
            {
              answerTitle: 'I eat late at night',
              answerText: null,
              active: 'answerRightActive1',
              iconAnswer: require('@/assets/img/icon_answer.png'),
              iconAnswerTest: require('@/assets/img/icon_answer_test.png'),
            },
            {
              answerTitle: 'I don’t get enough sleep',
              answerText: null,
              active: 'answerRightActive2',
              iconAnswer: require('@/assets/img/icon_answer.png'),
              iconAnswerTest: require('@/assets/img/icon_answer_test.png'),
            },
            {
              answerTitle: 'I can’t give up sweets',
              answerText: null,
              active: 'answerRightActive3',
              iconAnswer: require('@/assets/img/icon_answer.png'),
              iconAnswerTest: require('@/assets/img/icon_answer_test.png'),
            },
            {
              answerTitle: 'I love soft drinks',
              answerText: null,
              active: 'answerRightActive3',
              iconAnswer: require('@/assets/img/icon_answer.png'),
              iconAnswerTest: require('@/assets/img/icon_answer_test.png'),
            },
            {
              answerTitle: 'I consume a lot of salt',
              answerText: null,
              active: 'answerRightActive3',
              iconAnswer: require('@/assets/img/icon_answer.png'),
              iconAnswerTest: require('@/assets/img/icon_answer_test.png'),
            },
            {
              answerTitle: 'None of the above',
              answerText: null,
              active: 'answerRightActive3',
              iconAnswer: require('@/assets/img/icon_answer.png'),
              iconAnswerTest: require('@/assets/img/icon_answer_test.png'),
            },
          ],
      },
      {
        id: 2,
        visibility: false,
        imageMain: require('@/assets/img/woman11.jpg'),
        icon: require('@/assets/img/w11_icon.png'),
        step: '11/18',
        title: 'Select veggies you want to include in your meal plan',
        width: 'width: 55%;',
        answer:
          [
            {
              answerTitle: 'Broccoli',
              answerText: null,
              active: 'answerRightActive1',
              iconAnswer: require('@/assets/img/icon_answer.png'),
              iconAnswerTest: require('@/assets/img/icon_answer_test.png'),
            },
            {
              answerTitle: 'Sweet potato',
              answerText: null,
              active: 'answerRightActive2',
              iconAnswer: require('@/assets/img/icon_answer.png'),
              iconAnswerTest: require('@/assets/img/icon_answer_test.png'),
            },
            {
              answerTitle: 'Mushrooms',
              answerText: null,
              active: 'answerRightActive3',
              iconAnswer: require('@/assets/img/icon_answer.png'),
              iconAnswerTest: require('@/assets/img/icon_answer_test.png'),
            },
            {
              answerTitle: 'Tomatoes',
              answerText: null,
              active: 'answerRightActive3',
              iconAnswer: require('@/assets/img/icon_answer.png'),
              iconAnswerTest: require('@/assets/img/icon_answer_test.png'),
            },
            {
              answerTitle: 'Spinach',
              answerText: null,
              active: 'answerRightActive3',
              iconAnswer: require('@/assets/img/icon_answer.png'),
              iconAnswerTest: require('@/assets/img/icon_answer_test.png'),
            },
            {
              answerTitle: 'Zucchini',
              answerText: null,
              active: 'answerRightActive3',
              iconAnswer: require('@/assets/img/icon_answer.png'),
              iconAnswerTest: require('@/assets/img/icon_answer_test.png'),
            },
            {
              answerTitle: 'Pepper',
              answerText: null,
              active: 'answerRightActive3',
              iconAnswer: require('@/assets/img/icon_answer.png'),
              iconAnswerTest: require('@/assets/img/icon_answer_test.png'),
            },
          ],
      },
      {
        id: 3,
        visibility: false,
        imageMain: require('@/assets/img/woman12.jpg'),
        icon: require('@/assets/img/w12_icon.png'),
        step: '12/18',
        title: 'Select items you want to include in your meal plan',
        width: 'width: 60%;',
        answer:
          [
            {
              answerTitle: 'Avocado',
              answerText: null,
              active: 'answerRightActive1',
              iconAnswer: require('@/assets/img/icon_answer.png'),
              iconAnswerTest: require('@/assets/img/icon_answer_test.png'),
            },
            {
              answerTitle: 'Eggs',
              answerText: null,
              active: 'answerRightActive2',
              iconAnswer: require('@/assets/img/icon_answer.png'),
              iconAnswerTest: require('@/assets/img/icon_answer_test.png'),
            },
            {
              answerTitle: 'Yogurt',
              answerText: null,
              active: 'answerRightActive3',
              iconAnswer: require('@/assets/img/icon_answer.png'),
              iconAnswerTest: require('@/assets/img/icon_answer_test.png'),
            },
            {
              answerTitle: 'Tofu',
              answerText: null,
              active: 'answerRightActive3',
              iconAnswer: require('@/assets/img/icon_answer.png'),
              iconAnswerTest: require('@/assets/img/icon_answer_test.png'),
            },
            {
              answerTitle: 'Olives',
              answerText: null,
              active: 'answerRightActive3',
              iconAnswer: require('@/assets/img/icon_answer.png'),
              iconAnswerTest: require('@/assets/img/icon_answer_test.png'),
            },
            {
              answerTitle: 'Peanut butter nuts',
              answerText: null,
              active: 'answerRightActive3',
              iconAnswer: require('@/assets/img/icon_answer.png'),
              iconAnswerTest: require('@/assets/img/icon_answer_test.png'),
            },
            {
              answerTitle: 'Milk',
              answerText: null,
              active: 'answerRightActive3',
              iconAnswer: require('@/assets/img/icon_answer.png'),
              iconAnswerTest: require('@/assets/img/icon_answer_test.png'),
            },
          ],
      },
      {
        id: 4,
        visibility: false,
        imageMain: require('@/assets/img/woman13.jpg'),
        icon: require('@/assets/img/w13_icon.png'),
        step: '13/18',
        title: 'Select meats you want to include in your meal plan',
        width: 'width: 65%;',
        answer:
          [
            {
              answerTitle: 'Turkey',
              answerText: null,
              active: 'answerRightActive1',
              iconAnswer: require('@/assets/img/icon_answer.png'),
              iconAnswerTest: require('@/assets/img/icon_answer_test.png'),
            },
            {
              answerTitle: 'Fish',
              answerText: null,
              active: 'answerRightActive2',
              iconAnswer: require('@/assets/img/icon_answer.png'),
              iconAnswerTest: require('@/assets/img/icon_answer_test.png'),
            },
            {
              answerTitle: 'Beef',
              answerText: null,
              active: 'answerRightActive3',
              iconAnswer: require('@/assets/img/icon_answer.png'),
              iconAnswerTest: require('@/assets/img/icon_answer_test.png'),
            },
            {
              answerTitle: 'Chicken',
              answerText: null,
              active: 'answerRightActive3',
              iconAnswer: require('@/assets/img/icon_answer.png'),
              iconAnswerTest: require('@/assets/img/icon_answer_test.png'),
            },
            {
              answerTitle: 'Pork',
              answerText: null,
              active: 'answerRightActive3',
              iconAnswer: require('@/assets/img/icon_answer.png'),
              iconAnswerTest: require('@/assets/img/icon_answer_test.png'),
            },
            {
              answerTitle: 'None',
              answerText: null,
              active: 'answerRightActive3',
              iconAnswer: require('@/assets/img/icon_answer.png'),
              iconAnswerTest: require('@/assets/img/icon_answer_test.png'),
            },
          ],
      },
    ],
    manAnswer: [
      {
        id: 1,
        visibility: true,
        imageMain: require('@/assets/img/man14.jpg'),
        icon: require('@/assets/img/w14_icon.png'),
        step: '14/18',
        title: 'How old are you?',
        placeholder: 'years',
        textTitle:'We ask your age to personalize your plan',
        textParagraph: 'Older people are found to have a higher body fat percentage than younger people with the same BMI.',
        width: 'width: 75%;',
      },
      {
        id: 2,
        visibility: false,
        imageMain: require('@/assets/img/man15.jpg'),
        icon: require('@/assets/img/w15_icon.png'),
        step: '15/18',
        title: 'Whats your height?',
        placeholder: 'cm',
        textTitle:'Calculating your BMI',
        width: 'width: 85%;',
        textParagraph: 'Body mass index (BMI) is a metric of body fat percentage commonly used to estimate risk levels of potential health problems.'
      },
      {
        id: 3,
        visibility: false,
        imageMain: require('@/assets/img/woman16.jpg'),
        icon: require('@/assets/img/w16_icon.png'),
        step: '16/18',
        title: 'Ok, what’s your current weight?',
        placeholder: 'kg',
        textTitle:null,
        textParagraph: null,
        width: 'width: 95%;',
      },
      {
        id: 4,
        visibility: false,
        imageMain: require('@/assets/img/man17.jpg'),
        icon: require('@/assets/img/w17_icon.png'),
        step: '17/18',
        title: 'What is the ideal weight you want to reach?',
        placeholder: 'kg',
        params: [],
        textTitle:null,
        textParagraph: null,
        width: 'width: 100%;',
      },
    ],
  },
  mutations:{
    setPole(state, payload) {
      state.womanAnswer.params = payload
    },
  },
  actions:{
    setPole({commit}, payload) {
      commit('setPole', payload)
    },
  },
  getters: {
    getWoman(state) {
      return state.woman
    },
    getMan(state) {
      return state.man
    },
    getWomanTest(state) {
      return state.womanTest
    },
    getManTest(state) {
      return state.manTest
    },
    womanAnswer(state) {
      return state.womanAnswer
    },
    manAnswer(state) {
      return state.manAnswer
    }
  }
})
