# server.py

import asyncio
import json
import websockets


async def process_message(websocket, path):
    try:
        async for message in websocket:
            data = json.loads(message)
            input_message = data["inputMessage"]
            max_length = data["maxLength"]
            top_p = data["topP"]
            temperature = data["temperature"]
            max_rounds = data["maxRounds"]
            use_stream_chat = data["useStreamChat"]
            # Here, you should integrate the ChatGPT model to generate a response
            # For demonstration purposes, we're simply echoing the user's message
            bot_message = {"inputMessage": f"Bot says: {input_message}, again",
                           "maxLength": max_length,
                           "topP": top_p,
                           "temperature": temperature,
                           "maxRounds": max_rounds,
                           "useStreamChat": use_stream_chat}
            await websocket.send(json.dumps(bot_message))
    except websockets.exceptions.ConnectionClosedOK:
        pass

start_server = websockets.serve(process_message, "localhost", 8080)

asyncio.get_event_loop().run_until_complete(start_server)
asyncio.get_event_loop().run_forever()
