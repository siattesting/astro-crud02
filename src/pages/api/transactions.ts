import type { APIRoute, APIContext } from 'astro';
import { POCKET } from '../../service/PocketBase';

export const POST: APIRoute = async ({ request }) => {
  const data = await request.formData();
  const title = data.get('title');
  const content = data.get('content');
  const amount = Number(data.get('amount'));
  const type = data.get('type');
  const date_operation = data.get('date');
  const author = await POCKET.authStore.model?.id;

  // TO DO validation
  // Validate the data - you'll probably want to do more than this
  if (!title || !content || !amount || !date_operation) {
    return new Response(
      JSON.stringify({
        message: 'Missing required fields',
      }),
      { status: 400 }
    );
  }
  try {
    await POCKET.collection('transactions').create({
      title,
      content,
      amount,
      type,
      date_operation,
      author,
    });
    return new Response(
      JSON.stringify({
        message: 'Success!',
      }),
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
  }
};

export const GET: APIRoute = () => {
  return new Response(
    JSON.stringify({
      greeting: 'Hello',
    })
  );
};
