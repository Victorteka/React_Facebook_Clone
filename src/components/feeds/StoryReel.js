import React from 'react'

import Story from './Story'
import "./StoryReel.css"

function StoryReel() {
    return (
        <div className='storyReel'>
            <Story 
            title="Victor Teka"
            profileSrc="https://avatars0.githubusercontent.com/u/37833706?s=460&v=4"
            image="https://images.unsplash.com/photo-1492681290082-e932832941e6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1502&q=80" />

            <Story 
            title="Rafeh Qazi"
            profileSrc="https://images.unsplash.com/photo-1552058544-f2b08422138a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=344&q=80"
            image="https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"/>

            <Story 
            title="Sony Sangha"
            profileSrc="https://images.unsplash.com/photo-1494959764136-6be9eb3c261e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
            image="https://images.unsplash.com/photo-1500259783852-0ca9ce8a64dc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80" />

            <Story 
            title="Frankie"
            profileSrc="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
            image="https://scontent.fnbo2-1.fna.fbcdn.net/v/t31.0-8/26685848_1980767911940196_6166388606493393504_o.jpg?_nc_cat=110&ccb=2&_nc_sid=e3f864&_nc_ohc=2e79pWZYw3UAX8t2bOy&_nc_ht=scontent.fnbo2-1.fna&oh=5c4ba9e720861effc7edc2cc28e32161&oe=5FD6290D"/>

            <Story 
            title="John"
            profileSrc="https://media-exp1.licdn.com/dms/image/C4E03AQGivOvOWtHbhQ/profile-displayphoto-shrink_200_200/0?e=1611187200&v=beta&t=MOFhzCqfkSZNcPp3fmuZndcfyL5e_JKq2duiI9cj9tM"
            image="https://media-exp1.licdn.com/dms/image/C4E16AQHZNz8j82oKdg/profile-displaybackgroundimage-shrink_200_800/0?e=1611187200&v=beta&t=_H-HN6_sBRGtEMWxo8TFE6ogW-IJ5I43JOtzIjeAKl4"/>
        </div>
    )
}

export default StoryReel
